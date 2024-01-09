import { Helmet } from 'react-helmet'

const PageTitle = ({ title }) => {
  return (
    <Helmet>
          <meta name="description" content="The Symbol of Satisfaction ..." />

      <title>{title ? title : ""}</title>
    </Helmet>
  )
}
export default PageTitle