import { Repository } from 'typeorm';
import { STATUS } from './../constants';
import { map, omit, isEmpty } from 'lodash';
import { ResultPagi } from './dto/result-pagi-dto';
import { BuildPagi } from './dto/build-pagi-dto';
import { PagiOptions } from './dto/pagi-options-dto';

export class GenericService {
  constructor(public repository: Repository<any>) {}

  removeAllFields(rows, fields = ['createdAt', 'updatedAt']) {
    return map(rows, row => this.removeFields(row, fields));
  }

  removeFields(row, fields = ['createdAt', 'updatedAt']) {
    return omit(row, fields);
  }

  async findAll(): Promise<Object[]> {
    return await this.repository.find();
  }

  async searchByID(id): Promise<Object> {
    return await this.repository.findOneOrFail(id);
  }

  async findRelation(relations): Promise<Array<Object>> {
    return await this.repository.find({ relations });
  }


  public async findByID(id: number): Promise<Object> {
    return await this.repository.findOne(id);
  }

  async findByUpdate(id): Promise<Object> {
    const oldData = await this.findByID(id);

    oldData['updatedAt'] = new Date();
    return oldData;
  }

  // if there is a custom implementation, please override this to the respective service
  async buildPaginate(options: BuildPagi): Promise<ResultPagi> {
    return await this.paginate(options);
  }

  generateWhere(query) {
    /**
    let results = await userRepo.find({
      where : {
        firstname : Like('%John%'),
        lastname : Like('%Doe%'),
      }
    });
     */
    return {};
  }

  async paginate(
    data: BuildPagi,
    remove: Array<string> = [],
  ): Promise<ResultPagi> {
    const { limit, page = 1, where = {}, relations = [], select = [] } = data;

    const options: PagiOptions = {
      where,
      relations,
      take: limit,
      skip: (page - 1) * limit,
    };

    if (!isEmpty(select)) {
      options.select = select;
    }

    let [results, total] = await this.repository.findAndCount(options);

    if (!isEmpty(remove)) {
      results = this.removeAllFields(results, remove);
    }

    // TODO add more tests for paginate

    return {
      results,
      total,
      page,
    };
  }
}
