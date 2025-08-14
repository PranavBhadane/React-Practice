import React from 'react';

export default  function Courses() {
  const courseList = [
    { 
      name: 'Full Stack Java', 
      info: 'Job Oriented Course covering HTML, CSS, JavaScript, Core Java, Advanced Java, Spring Boot, Hibernate, REST APIs, SQL, and NoSQL databases.' 
    },
    { 
      name: 'Software Testing', 
      info: 'Job Oriented Course covering Manual Testing, Automation Testing, Selenium, TestNG, and industry-standard QA practices.' 
    },
    { 
      name: 'Full Stack .Net Core', 
      info: 'Job Oriented Course including HTML, CSS, JavaScript, C#, ASP.NET Core, Entity Framework, REST APIs, and SQL Server.' 
    },
    { 
    
      name: 'Data Science', 
      info: 'Job Oriented Course on Python, Data Analysis, Data Visualization, Machine Learning, and AI tools.' 
    },
    
    { 
      name: 'Automation Testing', 
      info: 'Job Oriented Course on Selenium, TestNG, Cucumber, API Testing, and CI/CD integration.' 
    }
  ];

  return (
    <section>
      <h2>Courses Available</h2>
      {courseList.map((course, index) => (
        <details key={index} className="course-box">
          <summary className="course-header">{course.name}</summary>
          <div className="course-details">{course.info}</div>
        </details>
      ))}
    </section>
  );
}


