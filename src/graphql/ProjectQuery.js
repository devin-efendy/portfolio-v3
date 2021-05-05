import { graphql, useStaticQuery } from "gatsby"

const useProjectQuery = () => {
  const queryData = useStaticQuery(graphql`
    query {
      allFile(filter: { relativeDirectory: { eq: "projects" } }) {
        edges {
          node {
            name
            childImageSharp {
              fluid(maxWidth: 700) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
      allMarkdownRemark(
        filter: { frontmatter: { type: { eq: "project" } } }
        sort: { fields: frontmatter___order }
      ) {
        edges {
          node {
            frontmatter {
              title
              id
              name
              tech
              demo
              source
            }
            excerpt(pruneLength: 500)
            html
          }
        }
      }
    }
  `)

  const projectData = []

  const images = queryData.allFile.edges.map(edge => {
    return edge.node
  })

  const markdowns = queryData.allMarkdownRemark.edges.map(edge => {
    return edge.node
  })

  markdowns.forEach(project => {
    const frontmatter = project.frontmatter

    const findProject = images.find(e => e.name === frontmatter.id)

    projectData.push({
      key: frontmatter.id,
      title: frontmatter.title,
      tech: frontmatter.tech,
      demo: frontmatter.demo,
      source: frontmatter.source,
      description: project.excerpt,
      imageSharp: findProject.childImageSharp.fluid,
      html: project.html,
    })
  })

  return projectData
}

export default useProjectQuery
