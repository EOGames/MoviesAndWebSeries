import React from "react";

const SerchBar = function(props)
{
    return(
        <div>
            <input id="serchbar" type={'search'} placeholder ={'enter an name to serch'}  onChange = {props.searchChange} />
        </div>
    );
}
export default SerchBar;