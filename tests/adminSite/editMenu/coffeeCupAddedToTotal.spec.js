import * as allure from 'allure-js-commons';
import { test } from '../../_fixtures/fixtures';

test(`New coffee can be added to the  Menu`, async ({}) => {
  // This is a fake example test.
  await allure.epic('Admin site');
  await allure.feature('Edit menu');
  await allure.story('Add new coffe')
  await allure.severity(`critical`);
});
