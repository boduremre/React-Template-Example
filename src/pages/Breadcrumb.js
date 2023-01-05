// Breadcrumb
import React, {Fragment} from 'react';

export function Breadcrumb(props) {
    return (
        <Fragment>
            <div className="using-border py-3">
                <div className="inner_breadcrumb ml-4">
                    <ul className="short_ls">
                        <li>
                            <a href="/home">Anasayfa</a>
                            <span>&nbsp;/&nbsp;</span>
                        </li>
                        <li>
                            {props.title}
                        </li>
                    </ul>
                </div>
            </div>
        </Fragment>
    );
};