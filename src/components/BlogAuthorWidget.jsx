import React from 'react'

import {userAvatar} from './UserWidgetInline'

export default function BlogAuthorWidget({data}) {
    return (
        <div style={{marginTop: '-1rem', marginBottom: '-0.5rem'}}>
            <div className="row margin-top--md margin-bottom--sm">
                {data.map(user => (
                    <div
                        className="col col--6 authorCol_node_modules-@docusaurus-theme-classic-lib-next-theme-BlogPostAuthors-styles-module">
                        <div className="avatar margin-bottom--sm" key={user.id}>
                            <div className="avatar__photo">
                                <img
                                    className="image_node_modules-@docusaurus-theme-classic-lib-next-theme-BlogPostAuthor-styles-module"
                                    src={userAvatar(user, 128)} alt={user.username}/>
                            </div>
                            <div className="avatar__intro" itemProp="author" itemScope=""
                                 itemType="https://schema.org/Person">
                                <div className="avatar__name">
                                    <span itemProp="name">{user.username ?? 'Unknown User'}</span>
                                </div>
                                <small className="avatar__subtitle" itemProp="description"
                                       style={{color: 'gray'}}>{user.id}</small></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}