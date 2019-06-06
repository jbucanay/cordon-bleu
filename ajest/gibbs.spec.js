const request = require("supertest");

const app = require("../server/index");

describe("Test the root path", () => {
  test("It should response the GET method", () => {
    return request(app)
      .get("/")
      .expect(200);
  });
});

describe("test post methods", () => {
  test("It should respond with status 200", () => {
    return request(app)
      .post("/api/restaurant")
      .expect(200);
  });
});

const Restaurants = resquire("../src/components/restaurants");
const axios = require("axios")

jest.mock("axios");
describe("restaurants should have get list of restuarants near", () => {
  it("shows a list restuarants", async () => {
    describe("test post methods", () => {
      test("It should respond with status 200", () => {
        return request(app)
          .post("/api/restaurant")
          .expect(200);
      }).then(res => {
        
      
   
    axios.get.mockResolvedValue(res);
    const component = create(<Restaurants />);
    const instance = component.getInstance();
    await instance.componentDidMount();
    const root = component.root;
    const listOfNames = root.findAll(element => element.type === "h3");
    expect(listOfNames[0].props.children).toBe("article");
    expect(listOfNames[1].props.children).toBe("section");
  })
});
  });
});
