import { graphql, useStaticQuery } from 'gatsby'

const useExperienceQuery = () => {
  const queryData = useStaticQuery(graphql`
    query {
      allFile(filter: { relativeDirectory: { eq: "company-logo" } }) {
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
        filter: { frontmatter: { type: { eq: "experience" } } }
        sort: { fields: frontmatter___order, order: DESC }
      ) {
        edges {
          node {
            frontmatter {
              company_link
              company_name
              company_logo
              id
              position
              dates
            }
            excerpt(pruneLength: 500)
            html
          }
        }
      }
    }
  `)

  const experienceData = []

  const images = queryData.allFile.edges.map(edge => {
    return edge.node
  })

  const markdowns = queryData.allMarkdownRemark.edges.map(edge => {
    return edge.node
  })

  markdowns.forEach(item => {
    const frontmatter = item.frontmatter

    const findExperience = images.find(e => e.name === frontmatter.company_logo)

    experienceData.push({
      key: frontmatter.id,
      companyName: frontmatter.company_name,
      companyLink: frontmatter.company_link,
      companyLogo: frontmatter.company_logo,
      position: frontmatter.position,
      dates: frontmatter.dates,
      description: item.excerpt,
      imageSharp: findExperience.childImageSharp.fluid,
      html: item.html,
    })
  })

  return experienceData
}

export default useExperienceQuery
