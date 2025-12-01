import { test, expect } from '@playwright/test';

test('GET Users API validation', async ({ request }) => {
  const response = await request.get('https://reqres.in/api/users?page=2');
  expect(response.status()).toBe(200);

  const body = await response.json();
  expect(body.data[0].email).toContain('@');
});
