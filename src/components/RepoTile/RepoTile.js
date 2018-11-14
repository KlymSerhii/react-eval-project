import './repoTile.scss'

import React from 'react'
import PropTypes from 'prop-types'

import Icon from '../Icon'
import {faUser, faCode, faDiagnoses, faStar, faCodeBranch} from '@fortawesome/free-solid-svg-icons'

const RepoTile = ({repo}) => {
  return (
    <div styleName='tileContainer'>
      <div>
        <a styleName='repoLink' href={repo.html_url} target='__blank'>{repo.name}</a>
      </div>
      {repo.language &&
      <div styleName='metaRow stretch'>
        <div>
          <div>Created:</div>
          {new Date(repo.created_at).toDateString()}
        </div>
        <div styleName='metaRow'>
          <Icon icon={faCode} />
          <div>{repo.language}</div>
        </div>
      </div>
      }
      {repo.description &&
      <div styleName='description'>
        <p>{repo.description}</p>
      </div>
      }
      <div>
        <div styleName='metaRow'>
          <div>{repo.watchers_count}</div>
          <Icon icon={faUser} />
          <div>Watchers</div>
        </div>
        <div styleName='metaRow'>
          <div>{repo.open_issues}</div>
          <Icon icon={faDiagnoses} />
          <div>Open Issues</div>
        </div>
        <div styleName='metaRow'>
          <div>{repo.stargazers_count}</div>
          <Icon icon={faStar} />
          <div>Stars</div>
        </div>
        <div styleName='metaRow'>
          <div>{repo.forks_count}</div>
          <Icon icon={faCodeBranch} />
          <div>Forks</div>
        </div>
      </div>
    </div>
  )
}

RepoTile.propTypes = {
  repo: PropTypes.object
}

export default RepoTile
