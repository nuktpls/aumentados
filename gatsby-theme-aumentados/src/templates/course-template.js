import React from "react";
import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage, getSrc } from "gatsby-plugin-image";

import MainPageWrapper from "@BlockBuilder/MainPageWrapper";
import { useSiteMetadatas } from "../tools/useSiteMetadatas";

import { Task } from "../components/Task";
import { Homework } from "../components/Homework";
import { Apply } from "../components/Apply";
import { Faq } from "../components/Faq";

import AulaBtnTrilha from "../../static/images/aula-btn-trilha.svg";
import AulaBtnAjuda from "../../static/images/aula-btn-ajuda.svg";
import AulaBtnProvas from "../../static/images/aula-btn-provas.svg";
import AulaBtnTarefas from "../../static/images/aula-btn-tarefas.svg";
import AulaBtnTrabalhos from "../../static/images/aula-btn-trabalhos.svg";
import AulaBtnAulas from "../../static/images/aula-btn-aulas.svg";

const CourseTemplate = ({ data, location, pageContext }) => {
  const {
    imgHolder,
    bgPatternImg,
    boilerplateLogo,
    site,
    cardImage,
    bandeiraWhats,
  } = useSiteMetadatas();
  const badgeWhats = getImage(bandeiraWhats.childrenImageSharp[0]);
  const bgPatternSrc = getSrc(bgPatternImg.childrenImageSharp[0]);
  const logoQuery = getImage(boilerplateLogo.childrenImageSharp[0]);
  const { title, content, description } = pageContext;

  const contentCourse = data.course;
  // const questionaryCourse = data.allMarkdownRemark.edges.find(
  //   obj => obj.node.frontmatter.type === "questionary"
  // );
  // const taskCourse = data.allMarkdownRemark.edges.find(
  //   obj => obj.node.frontmatter.type === "task"
  // );
  // const propaedeuticsCourse = data.allMarkdownRemark.edges.find(
  //   obj => obj.node.frontmatter.type === "propaedeutics"
  // );
  // console.log("allFaqs >>>");
  // console.log(contentCourse);
  return (
    <MainPageWrapper
      backgroundImage={{
        src: bgPatternSrc,
      }}
      title={title}
      logo={
        <GatsbyImage
          image={logoQuery}
          alt={"title"}
          placeholder={"NONE"}
          critical='true'
          className={""}
        />
      }
      opt={{
        titleSeo: `Aumentados`,
        classes: "one-column",
        mainLogo: imgHolder,
        cardImage: cardImage ? getSrc(cardImage.childrenImageSharp[0]) : null,
        serverUrl: location.href,
        schemaType: "article",
        description: description,
        social: site.siteMetadata.social.twitter,
        badgesWhats: (
          <GatsbyImage
            image={badgeWhats}
            alt={"title"}
            placeholder={"NONE"}
            critical='true'
            className={"whatsMe"}
          />
        ),
      }}
    >
      <main>
        <div className='wrapper-main-classes-btn'>
          <div className='main-classes-btn'>
            <AulaBtnTrilha />
            <h2>Trilha</h2>
          </div>
          <Link to='#classes' className='main-classes-btn'>
            <AulaBtnAulas />
            <h2>Aulas</h2>
          </Link>

          <Link to='#apply' className='main-classes-btn'>
            <AulaBtnProvas />
            <h2>Provas</h2>
          </Link>
          <Link to='#homework' className='main-classes-btn'>
            <AulaBtnTrabalhos />
            <h2>Trabalhos</h2>
          </Link>
          <Link to='#task' className='main-classes-btn'>
            <AulaBtnTarefas />
            <h2>Tarefas</h2>
          </Link>
          <Link to='#faq' className='main-classes-btn'>
            <AulaBtnAjuda />
            <h2>Ajuda</h2>
          </Link>
        </div>

        <h1>oooio</h1>
        <div dangerouslySetInnerHTML={{ __html: content }}></div>
        <div id='classes'>
          {data.allTasks.edges.map((e, ind) => (
            <Task key={ind} data={e.node} />
          ))}
        </div>
        <div id='homework'>
          {data.allHomeworks.edges.map((e, ind) => (
            <Homework key={ind} data={e.node} />
          ))}
        </div>

        <div id='apply'>
          {data.allApplies.edges.map((e, ind) => (
            <Apply key={ind} data={e.node} />
          ))}
        </div>

        <div id='faq'>
          {data.allFaqs.edges.map((e, ind) => (
            <Faq key={ind} data={e.node} />
          ))}
        </div>

        {/* 
        <div className='course-content'>
          <h1>Content Course</h1>

          {contentCourse.map((theContent, index) => {
            return (
              <div key={index}>
                <h2
                  dangerouslySetInnerHTML={{
                    __html: `${theContent.node.frontmatter.title}`,
                  }}
                ></h2>
                <div
                  dangerouslySetInnerHTML={{
                    __html: `${theContent.node.html}`,
                  }}
                ></div>
              </div>
            );
          })}

        </div> */}
      </main>
    </MainPageWrapper>
  );
};

export const query = graphql`
  query CourseModules($slug: String!) {
    course: allMarkdownRemark(
      filter: {
        frontmatter: { topology: { eq: "module" }, slug: { eq: $slug } }
      }
    ) {
      edges {
        node {
          frontmatter {
            title
            slug
            type
            status
            author
            headline
            order
            featuredImage {
              childrenImageSharp {
                gatsbyImageData(
                  width: 350
                  height: 224
                  placeholder: NONE
                  quality: 100
                )
              }
            }
          }
          html
        }
      }
    }
    allApplies: allMarkdownRemark(
      filter: {
        frontmatter: { topology: { eq: "apply" }, slug: { eq: $slug } }
      }
    ) {
      edges {
        node {
          frontmatter {
            title
            headline
            blocked
            executionTime
            order
            importance
          }
          html
        }
      }
    }

    allFaqs: allMarkdownRemark(
      filter: { frontmatter: { topology: { eq: "faq" }, slug: { eq: $slug } } }
    ) {
      edges {
        node {
          frontmatter {
            title
          }
          html
        }
      }
    }

    allHomeworks: allMarkdownRemark(
      filter: {
        frontmatter: { topology: { eq: "homework" }, slug: { eq: $slug } }
      }
    ) {
      edges {
        node {
          frontmatter {
            title
            category
            assignTo
            order
            importance
            progress
          }
          html
        }
      }
    }

    allTasks: allMarkdownRemark(
      filter: { frontmatter: { topology: { eq: "task" }, slug: { eq: $slug } } }
    ) {
      edges {
        node {
          frontmatter {
            title
            category
            assignTo
            description
            order
            importance
            progress
            hasComment
          }
          html
        }
      }
    }
  }
`;

export default CourseTemplate;
