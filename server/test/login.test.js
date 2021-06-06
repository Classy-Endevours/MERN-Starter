const { getMockReq, getMockRes } = require("@jest-mock/express");
const Auth = require("../controllers/Auth");
const AuthModel = require("../config/database/mongoose/models/Auth");
const Authentication = require("../lib/Authentication");

describe("Expire action", () => {
  const { res, clearMockRes, next } = getMockRes();

  afterEach(clearMockRes);

  it("should return 200 when valid data given", async (done) => {
    global.__logger = {
        error: jest.fn(),
        info: jest.fn(),
      }
    const req = getMockReq({
      body: {
        email: "tenantId",
        password: "222",
      },
    });
    AuthModel.findOne = jest.fn().mockResolvedValueOnce({_id: 1})
    // jest.spyOn(AuthModel, "findOne").mockResolvedValueOnce({
    //   // update offer status
    //   rows: [],
    //   rowCount: 1,
    // });
    // jest.spyOn(AuthModel, "comparePassword").mockResolvedValueOnce(true);
    // jest
    //   .spyOn(Authentication, "generateToken")
    //   .mockResolvedValueOnce("some-token");
    await Auth.getProfile(req, res, next);

    expect(res.status).toHaveBeenCalledWith(200);
    jest.restoreAllMocks();
    done();
  });
});
