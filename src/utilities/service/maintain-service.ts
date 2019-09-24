import { STATUS } from './../constants';
import { GenericService } from './generic-service';

export class MaintainService extends GenericService {
  constructor(public maintenRepo) {
    super(maintenRepo);
  }

  findAll(): Promise<Object[]> {
    return this.repository.find();
  }

  save(object: any, email: string = '', bool = true): Promise<Object> {
    if (!bool) object['updatedBy'] = email;

    return this.repository.save(object);
  }

  findByID(id: number): Promise<Object> {
    return this.repository.findOne(id);
  }

  async findByUpdate(id): Promise<Object> {
    return this.findByID(id);
  }

  async update(object: any, id: any, email: string = '', bool: boolean = true): Promise<Object> {
    const oldData: any = await this.findByUpdate(id),
      keys = Object.keys(object);

    keys.forEach(val => (oldData[val] = object[val]));

    if (bool) oldData['updatedBy'] = email;

    return await this.repository.save(oldData);
  }

  async updateNoTrail(object: any, id: any, email: string = '') {
    return this.update(object, id, email, false);
  }

  async inactive(id, email: string = ''): Promise<Object> {
    const oldData: any = await this.findByUpdate(id);

    oldData['Active'] = STATUS.INACTIVE;
    oldData['UpdatedBy'] = email;

    return await this.repository.save(oldData);
  }

  async active(id, email: string = ''): Promise<Object> {
    const oldData: any = await this.findByUpdate(id);

    oldData['Active'] = STATUS.ACTIVE;
    oldData['UpdatedBy'] = email;

    return await this.repository.save(oldData);
  }
}
