// Select only the dogs
// Translate their ages into dog years (multiply them by seven)
// Sum the results

const data = [
  {
    name: 'Butters',
    age: 3,
    type: 'dog'
  },
  {
    name: 'Lizzy',
    age: 6,
    type: 'dog'
  },
  {
    name: 'Red',
    age: 1,
    type: 'cat'
  },
  {
    name: 'Joey',
    age: 3,
    type: 'dog'
  }
];

const companies = [
  {
    name: 'NextGen Advisors',
    industry: 'Professional Services',
    contact: 'John Rutton',
    sales: 135000
  },
  {
    name: 'Receivers Inc',
    industry: 'Legal',
    contact: 'Stacey Martin',
    sales: 201000
  },
  {
    name: 'Ethan Allen',
    industry: 'Textile',
    contact: 'Mark Shamburger',
    sales: 735000
  },
  {
    name: 'Russian River Utility',
    industry: 'Transportaion&Shipping',
    contact: 'Phil Butterworth',
    sales: 605000
  },
  {
    name: 'Wayne Johnson Law Office',
    industry: 'Legal',
    contact: 'Beverly Stephens',
    sales: 135000
  },
  {
    name: 'Kravet',
    industry: 'Textile',
    contact: 'Jan Farnsworth',
    sales: 105000
  },
  {
    name: 'Wacomb Data',
    industry: 'Professional Services',
    contact: 'Larry Peters',
    sales: 13000
  },
  {
    name: 'Farnsworth Utility',
    industry: 'Transportaion&Shipping',
    contact: 'John Rutton',
    sales: 437000
  },
  { name: 'Barnes Law', industry: 'Legal', contact: 'John Percy', sales: 35000 }
];

// find  all the contacts in the legal industry, take 30% from each of their sales and then show the sum of the total sales from that industry

let totalSales = companies
  .filter(company => (company.industry = 'Legal'))
  .map(company => company.sales - company.sales * 0.3)
  .reduce((amt, curr) => amt + curr);

console.log(totalSales);
