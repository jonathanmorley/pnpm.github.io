/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');
const translate = require("../../server/translate.js").translate;

const CompLibrary = require('../../core/CompLibrary.js');
const Container = CompLibrary.Container;

const siteConfig = require(process.cwd() + '/siteConfig.js');

class Users extends React.Component {
  render() {
    if ((siteConfig.users || []).length === 0) {
      return null;
    }
    const showcase = siteConfig.users.map((user, i) => {
      return (
        <a href={user.infoLink} target="_blank" key={i} rel="noopener">
          <img src={user.image} title={user.caption} style={{ width: user.width ? `${user.width}px` : null }} />
        </a>
      );
    });

    return (
      <div className="mainContainer">
        <Container padding={['bottom', 'top']}>
          <div className="showcaseSection">
            <div className="prose">
              <h1><translate>Who's Using This?</translate></h1>
              <p><translate>This project is used by many folks</translate></p>
            </div>
            <div className="logos">{showcase}</div>
            <p><translate>Are you using this project?</translate></p>
            <a
              href="https://github.com/pnpm/pnpm.github.io/edit/source/website/siteConfig.js"
              className="button">
              <translate>Add your company</translate>
            </a>
          </div>
        </Container>
      </div>
    );
  }
}

module.exports = Users;
