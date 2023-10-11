// @ts-check
import { getData } from "../utils/getApi.js";
/**
 * @param {Object} project - Объект проекта.
 * @param {string} project.title - Заголовок проекта.
 * @param {string} project.description - Описание проекта.
 * @param {string} project.image - URL изображения проекта.
 */
const displayProject = (project, index) => {
  const projectDiv = document.createElement("div");
  projectDiv.className = "project";
  projectDiv.innerHTML = `
    <h6>${project.title}</h6>
    <p>${project.description}</p>
    <img src="${project.image}" alt="${project.title}">
    <button class="projectButton" id="projectButton${index}">Проект Райт ${
    index + 1
  }</button>
  `;
  const projectsContainer = document.getElementById("projectsContainer");
  if (projectsContainer) {
    projectsContainer.appendChild(projectDiv);
    const button = projectDiv.querySelector(`#projectButton${index}`);
    if (button) {
      button.addEventListener("click", () => {
        let pageUrl;
        switch (index) {
          case 0:
            pageUrl = "../../pages/pages_projects/project-1.html";
            break;
          case 1:
            pageUrl = "../../pages/pages_projects/project-2.html";
            break;
          case 2:
            pageUrl = "../../pages/pages_projects/project-3.html";
            break;
          case 3:
            pageUrl = "../../pages/pages_projects/project-c_House.html";
            break;
          default:
            pageUrl = "/";
        }

        window.location.href = pageUrl;
      });
    }
  } else {
    console.error(
      'Элемент с идентификатором "projectsContainer" не найден в DOM.'
    );
  }
};

const displayProjects = async () => {
  try {
    const data = await getData();

    for (let index = 0; index < Math.min(data.length, 4); index++) {
      const project = data[index];
      displayProject(project, index);
    }
  } catch (error) {
    console.error("Ошибка при получении данных: ", error);
  }
};

window.addEventListener("DOMContentLoaded", () => {
  displayProjects();
});
