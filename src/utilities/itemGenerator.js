import { faker } from "@faker-js/faker";
import { format } from "date-fns";
import { DATE_FORMATS } from "../constants";

const generateTitle = (length = 7) => faker.lorem.word(length);
const generateBody = (length = 5) => faker.lorem.paragraph(length);

function generator() {
  let id = 0;
  return () => id++;
};
const generateId = generator();

export default function ItemGenerator(title = generateTitle(), body = generateBody()) {
  this.id = generateId();
  this.createdAt = format(new Date(), DATE_FORMATS.DATE_FORMAT);
  this.title = title;
  this.message = body;
}
