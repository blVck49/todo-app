

const request = require('supertest')
const app = require('../app');
const User = require('../models/user');
let token;
let Token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im5ld3VzZXIxQGdtYWlsLmNvbSIsInVzZXJJZCI6IjYwNGFmYTg4NzcxZDllMjM0YzlmMDZiZSIsImlhdCI6MTYxNTgwMjE2OSwiZXhwIjoxNjE1ODg4NTY5fQ.NYQzQ84DhSB7R0uVJZQ6OP-TDmjJmjRKTbFwi-hb0F8'


// const oldUser = {
//   email: "test2@gmail.com",
//   password: "password"
// }

beforeEach(() => {
  jest.useFakeTimers()
})

beforeAll(() => {
  test('should login user', async () => {
    const response = await request(app)
    .post('/users/login')
    .send ({
      email: "newuser1@gmail.com",
      password: 'password',
    })
    .expect(200)
    token = response.body.token
 }, 30000)
 
});

test('should signup user', async () => {
  await request(app)
   .post('/users/signup')
   .send ({
     email: "newuser1@gmail.com",
     password: 'password',
   })
   .expect(409)
}, 10000)


test('should fetch all todos', async() => {
  await request(app).get('/todos')
  .set('Authorization', `Bearer ${Token}`)
  .expect(200)
  // .then(res => {
  //     expect(res.statusCode).toEqual(200);
  // });
});

test('should fail trying to fetch all todos', async() => {
    await request(app).get('/todos')
    .expect(401)
  });

test('should fetch a single todo', async () => {
    const postId = '604f3b9be94e942310166fd8';
    const res = await request(app).get(`/todos/${postId}`)
    .set('Authorization', `Bearer ${Token}`)
    expect(res.statusCode).toEqual(200);
  });

test('should create a todo', async() => {
  await request(app).post('/todos')
  .set('Authorization', `Bearer ${Token}`)
  .send({
    Title: "The Grammy awards",
    todoDetails: "The grammy awards took place on the 14th of March"
  })
  .expect(200)
 
 });


