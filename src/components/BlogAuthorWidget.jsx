import React from 'react'

export default function BlogAuthorWidget({data}) {
    function authorName(user) {
        if (user.type === 'discord') {
            return <span>{user.name}<span
                style={{color: 'lightgray', fontWeight: 400}}>#{user.discriminator}</span></span>
        } else {
            return user.name
        }
    }

    function authorId(user) {
        return user.type === 'discord' ? user.id : user.username
    }

    return (
        <div style={{marginTop: '-1rem', marginBottom: '-0.5rem'}}>
            <div className="row margin-top--md margin-bottom--sm">
                {data.map(user => (
                    <a href={user.url} target="_blank"
                       className="col col--6 authorCol_node_modules-@docusaurus-theme-classic-lib-next-theme-BlogPostAuthors-styles-module"
                       key={user.id} style={{color: 'inherit', textDecoration: 'none'}}>
                        <div className="avatar margin-bottom--sm">
                            <div className="avatar__photo">
                                <img
                                    className="image_node_modules-@docusaurus-theme-classic-lib-next-theme-BlogPostAuthor-styles-module"
                                    src={user.avatarUrl} alt={user.name}/>
                            </div>
                            <div className="avatar__intro" itemProp="author" itemScope=""
                                 itemType="https://schema.org/Person">
                                <div className="avatar__name">
                                    <span itemProp="name">{authorName(user)}</span>
                                </div>
                                <small className="avatar__subtitle" itemProp="description"
                                       style={{color: 'gray'}}>{authorId(user)}</small></div>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    )
}