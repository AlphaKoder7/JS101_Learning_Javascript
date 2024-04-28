const baseURL = 'https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees';
let currentPage = 1;
let limit = 10;
let filterBy = '';
let filterValue = '';
let sort = '';
let order = '';

const departmentFilter = document.getElementById('department-filter');
const genderFilter = document.getElementById('gender-filter');
const sortSalary = document.getElementById('sort-salary');
const employeeTable = document.getElementById('employee-table');
const prevPageButton = document.getElementById('prev-page');
const nextPageButton = document.getElementById('next-page');
const currentPageDisplay = document.getElementById('current-page');

const fetchEmployees = async () => {
  try {
    const url = `${baseURL}?page=${currentPage}&limit=${limit}` +
                `${filterBy ? `&filterBy=${filterBy}&filterValue=${filterValue}` : ''}` +
                `${sort ? `&sort=${sort}&order=${order}` : ''}`;
    
    const response = await fetch(url);
    const data = await response.json();
    
    renderTable(data.data);
    
    handlePagination(data.totalPages);
  } catch (error) {
    console.error('Error fetching employee data:', error);
  }
};

const renderTable = (employees) => {
  employeeTable.innerHTML = ''; // Clear existing content
  
  employees.forEach((employee, index) => {
    const row = document.createElement('tr');
    
    row.innerHTML = `
      <td>${(currentPage - 1) * limit + index + 1}</td>
      <td>${employee.name}</td>
      <td>${employee.gender}</td>
      <td>${employee.department}</td>
      <td>${employee.salary}</td>
    `;
    
    employeeTable.appendChild(row);
  });
};

const handlePagination = (totalPages) => {
  prevPageButton.disabled = (currentPage <= 1);
  nextPageButton.disabled = (currentPage >= totalPages);
  currentPageDisplay.textContent = currentPage;
};

departmentFilter.addEventListener('change', (e) => {
  filterBy = 'department';
  filterValue = e.target.value;
  fetchEmployees();
});

genderFilter.addEventListener('change', (e) => {
  filterBy = 'gender';
  filterValue = e.target.value;
  fetchEmployees();
});

sortSalary.addEventListener('change', (e) => {
  sort = 'salary';
  order = e.target.value;
  fetchEmployees();
});

prevPageButton.addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage -= 1;
    fetchEmployees();
  }
});

nextPageButton.addEventListener('click', () => {
  currentPage += 1;
  fetchEmployees();
});

fetchEmployees();
