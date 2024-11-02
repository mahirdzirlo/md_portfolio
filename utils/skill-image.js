import aws from "/public/svg/skills/aws.svg";
import azure from "/public/svg/skills/azure.svg";
import bootstrap from "/public/svg/skills/bootstrap.svg";
import css from "/public/svg/skills/css.svg";
import docker from "/public/svg/skills/docker.svg";
import figma from "/public/svg/skills/figma.svg";
import git from "/public/svg/skills/git.svg";
import graphql from "/public/svg/skills/graphql.svg";
import html from "/public/svg/skills/html.svg";
import java from "/public/svg/skills/java.svg";
import javascript from "/public/svg/skills/javascript.svg";
import kotlin from "/public/svg/skills/kotlin.svg";
import microsoftoffice from "/public/svg/skills/microsoftoffice.svg";
import mongoDB from "/public/svg/skills/mongoDB.svg";
import mysql from "/public/svg/skills/mysql.svg";
import nextJS from "/public/svg/skills/nextJS.svg";
import nginx from "/public/svg/skills/nginx.svg";
import postgresql from "/public/svg/skills/postgresql.svg";
import python from "/public/svg/skills/python.svg";
import react from "/public/svg/skills/react.svg";
import selenium from "/public/svg/skills/selenium.svg";
import tailwind from "/public/svg/skills/tailwind.svg";
import tensorflow from "/public/svg/skills/tensorflow.svg";
import typescript from "/public/svg/skills/typescript.svg";
import vitejs from "/public/svg/skills/vitejs.svg";
import vue from "/public/svg/skills/vue.svg";
import reactnative from "/public/svg/skills/reactnative.svg";
export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case "html":
      return html;
    case "docker":
      return docker;
    case "css":
      return css;
    case "javascript":
      return javascript;
    case "next.js":
      return nextJS;
    case "react.js":
      return react;
    case "typescript":
      return typescript;
    case "vue":
      return vue;
    case "bootstrap":
      return bootstrap;
    case "mongodb":
      return mongoDB;
    case "mysql":
      return mysql;
    case "postgresql":
      return postgresql;
    case "tailwind":
      return tailwind;
    case "vitejs":
      return vitejs;
    case "java":
      return java;
    case "kotlin":
      return kotlin;
    case "python":
      return python;
    case "aws":
      return aws;
    case "git":
      return git;
    case "graphql":
      return graphql;
    case "nginx":
      return nginx;
    case "selenium":
      return selenium;
    case "tensorflow":
      return tensorflow;
    case "azure":
      return azure;
    case "figma":
      return figma;
    case "microsoft office":
      return microsoftoffice;
    default:
      return reactnative;
  }
};
