import { STATUS } from './../constants';
import { GenericService } from './generic-service';

export class MaintainService extends GenericService {
  constructor(public maintenRepo) {
    super(maintenRepo);
  }

  findAll(): Promise<Object[]> {
    return this.repository.find();
  }

  async save(object: any, userId: number, bool = true): Promise<Object> {
    if (!bool) object['updatedBy'] = userId;

    return this.repository.save(object);
  }

  findByID(id: number): Promise<Object> {
    return this.repository.findOne(id);
  }

  async findByUpdate(id): Promise<Object> {
    return this.findByID(id);
  }

  async update(object: any, id: any, userId: number, bool: boolean = true): Promise<Object> {
    const oldData: any = await this.findByUpdate(id),
      keys = Object.keys(object);

    keys.forEach(val => (oldData[val] = object[val]));

    if (bool) oldData['updatedBy'] = userId;

    return await this.repository.save(oldData);
  }

  async updateNoTrail(object: any, id: any, userId: number) {
    return this.update(object, id, userId, false);
  }

  async inactive(id, userId: number): Promise<Object> {
    const oldData: any = await this.findByUpdate(id);

    oldData['Active'] = STATUS.INACTIVE;
    oldData['updatedBy'] = userId;

    return await this.repository.save(oldData);
  }

  async active(id, userId: number): Promise<Object> {
    const oldData: any = await this.findByUpdate(id);

    oldData['Active'] = STATUS.ACTIVE;
    oldData['updatedBy'] = userId;

    return await this.repository.save(oldData);
  }
}
