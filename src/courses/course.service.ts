import { Injectable } from "@nestjs/common";
import { MaintainService } from "../utilities/service/maintain-service";
import { InjectRepository } from "@nestjs/typeorm";
import { CourseRepository } from "./course.repository";

@Injectable()
export class CourseService extends MaintainService {
  constructor(@InjectRepository(CourseRepository) private courseReposiory: CourseRepository) {
    super(courseReposiory);
  }
}
