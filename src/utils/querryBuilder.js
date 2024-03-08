class QueryBuilder {
  constructor(model) {
    this.model = model;
    this.query = this.model.find();
  }

  filterByField(field, value) {
    this.query = this.query.where(field).equals(value);
    return this;
  }

  sortByField(field, order = 'asc') {
    this.query = this.query.sort({ [field]: order === 'asc' ? 1 : -1 });
    return this;
  }

  limitFields(fields) {
    this.query = this.query.select(fields);
    return this;
  }

  paginate(page, limit) {
    const skip = (page - 1) * limit;
    this.query = this.query.skip(skip).limit(limit);
    return this;
  }

  async execute() {
    return await this.query.exec();
  }
}

export default QueryBuilder;