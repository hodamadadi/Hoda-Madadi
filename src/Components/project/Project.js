import { useEffect, useState } from 'react';
import './project.css';
export function Project() {
  /*------------------------ARRAY OBJECT-------------------------*/
  const ProjectList = [
    {
      name: 'Roll Dice Number Game',
      url: 'https://user-images.githubusercontent.com/76562459/179945297-6074cc8a-172c-46f6-8d36-47a91cc1573b.gif',
      release_year: 2023,
    },
    {
      name: 'Simon Game',
      url: 'https://ik.imagekit.io/freshman/ezgif-5-d4bcbfc80baf_9V2NUhxNy.gif?tr=orig-true',
      release_year: 2023,
    },
    {
      name: 'Guess Number Game',
      url: 'https://fueler.io/storage/users/timeline_image/1681273360-g6tcqaatae5xg08hhxqb.gif',
      release_year: 2023,
    },
    {
      name: 'profile Cards',
      url: 'https://www.codewithrandom.com/wp-content/uploads/2023/02/CSS-Profile-Card-1-1024x536.jpg',
      release_year: 2022,
    },
    {
      name: 'Weather Animated',
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjv3oun8wENVx-8TAHw3njNxZgNyeKCXDGdWNpyTVO5XzdHzZ7ZSSccRlLx0EBYtEg490&usqp=CAU',
      release_year: 2022,
    },
    {
      name: 'Login form',
      url: 'https://www.codewithfaraz.com/img/html,%20css%20and%20javascript%20creating%20an%20animated%20dual%20login%20signup%20form%20that%20delights%20users.gif',
      release_year: 2022,
    },
  ];
  // List of filters
  const [filteredList, setFilteredList] = useState(ProjectList);
  // Selected name filter
  const [selectedName, setSelectedName] = useState('');
  // Selected Year filter
  const [selectedYear, setSelectedYear] = useState();
  const filterByBrand = filteredData => {
    //Avoid filter for empty string
    if (!selectedName) {
      return filteredData;
    }

    const filteredProjects = filteredData.filter(
      car => car.name.split(' ').indexOf(selectedName) !== -1
    );
    return filteredProjects;
  };
  const filterByYear = filteredData => {
    // --------------------Avoid filter for null value-----------------
    if (!selectedYear) {
      return filteredData;
    }
    const filteredProjects = filteredData.filter(
      car => car.release_year === selectedYear
    );
    return filteredProjects;
  };
  // --------------------Update seletedBrand state--------------------
  const handleBrandChange = event => {
    setSelectedName(event.target.value);
  };

  // --------------------Toggle seletedYear state-------------------
  const handleYearChange = event => {
    const inputYear = Number(event.target.id);
    if (inputYear === selectedYear) {
      setSelectedYear('');
    } else {
      setSelectedYear(inputYear);
    }
  };
  useEffect(() => {
    var filteredData = filterByBrand(ProjectList);
    filteredData = filterByYear(filteredData);
    setFilteredList(filteredData);
  }, [selectedName, selectedYear]);

  return (
    <section className="project container grid" id="myProject">
      <h4 className="project__title animate-charcter">
        My Project <i class="fa-regular fa-file-code"></i>
      </h4>
      <p className="project__befor-title">
        Visit My Project And Keep Your Feedback
      </p>
      <div className="project-filter">
        <div>
          <p>Project Name :</p>
        </div>
        <select
          id="name-input"
          value={selectedName}
          onChange={handleBrandChange}
        >
          <option value="">All</option>
          <option value="Guess">Guess</option>
          <option value="Simon">Simon</option>
          <option value="Dice">Dice</option>
          <option value="Card">Card</option>
          <option value="Login">Login</option>
        </select>
      </div>
      <div>Filter by Year</div>
      <div id="year-options" onClick={handleYearChange}>
        <div
          className={selectedYear === 2022 ? 'active-option' : 'filter-option'}
          id="2022"
        >
          2022
        </div>
        <div
          className={selectedYear === 2023 ? 'active-option' : 'filter-option'}
          id="2023"
        >
          2023
        </div>
      </div>
      <div id="project-list">
        {filteredList.map((item, index) => (
          <div className="project-item" key={index}>
            <img className="project-image" src={item.url} alt="img" />
            <div className="project-name"> {`Nmae: ${item.name}`}</div>
            <div className="project-year">
              {`Year: ${item.release_year}`}
              <a
                href="https://github.com/hodamadadi"
                className="home__social-link"
                target="_blank"
              >
                <i class="fa-brands fa-github fa-lg"></i>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Project;
