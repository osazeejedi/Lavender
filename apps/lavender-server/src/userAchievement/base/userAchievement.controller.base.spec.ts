import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { UserAchievementController } from "../userAchievement.controller";
import { UserAchievementService } from "../userAchievement.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  achievementAppUser: "exampleAchievementAppUser",
  achievementDateEarned: new Date(),
  createdAt: new Date(),
  dateAchieved: new Date(),
  dateEarned: new Date(),
  id: "exampleId",
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  achievementAppUser: "exampleAchievementAppUser",
  achievementDateEarned: new Date(),
  createdAt: new Date(),
  dateAchieved: new Date(),
  dateEarned: new Date(),
  id: "exampleId",
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    achievementAppUser: "exampleAchievementAppUser",
    achievementDateEarned: new Date(),
    createdAt: new Date(),
    dateAchieved: new Date(),
    dateEarned: new Date(),
    id: "exampleId",
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  achievementAppUser: "exampleAchievementAppUser",
  achievementDateEarned: new Date(),
  createdAt: new Date(),
  dateAchieved: new Date(),
  dateEarned: new Date(),
  id: "exampleId",
  updatedAt: new Date(),
};

const service = {
  createUserAchievement() {
    return CREATE_RESULT;
  },
  userAchievements: () => FIND_MANY_RESULT,
  userAchievement: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("UserAchievement", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: UserAchievementService,
          useValue: service,
        },
      ],
      controllers: [UserAchievementController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /userAchievements", async () => {
    await request(app.getHttpServer())
      .post("/userAchievements")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        achievementDateEarned:
          CREATE_RESULT.achievementDateEarned.toISOString(),
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        dateAchieved: CREATE_RESULT.dateAchieved.toISOString(),
        dateEarned: CREATE_RESULT.dateEarned.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /userAchievements", async () => {
    await request(app.getHttpServer())
      .get("/userAchievements")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          achievementDateEarned:
            FIND_MANY_RESULT[0].achievementDateEarned.toISOString(),
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          dateAchieved: FIND_MANY_RESULT[0].dateAchieved.toISOString(),
          dateEarned: FIND_MANY_RESULT[0].dateEarned.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /userAchievements/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/userAchievements"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /userAchievements/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/userAchievements"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        achievementDateEarned:
          FIND_ONE_RESULT.achievementDateEarned.toISOString(),
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        dateAchieved: FIND_ONE_RESULT.dateAchieved.toISOString(),
        dateEarned: FIND_ONE_RESULT.dateEarned.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /userAchievements existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/userAchievements")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        achievementDateEarned:
          CREATE_RESULT.achievementDateEarned.toISOString(),
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        dateAchieved: CREATE_RESULT.dateAchieved.toISOString(),
        dateEarned: CREATE_RESULT.dateEarned.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/userAchievements")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
