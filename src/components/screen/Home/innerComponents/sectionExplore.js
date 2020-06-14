import React, {useState}  from 'react';
import libgen from "libgen";




const SectionExplore = (props)=>{

    const [selectVal, setSelectedVal] = useState();
    const [searchFilter, setSearchFilter] = useState();

    const handleDropdownChange = (e)=> {
        setSelectedVal(e.target.value );
    };

    const handleInputChange = event => {
        const query = event.target.value;
        setSearchFilter(query);

    };

    const onSearchClick = ()=>{
        libgen.mirror((urlString)=>{
            console.log(`${urlString} is currently fastest`)
        })

        const options = {
            mirror: 'http://gen.lib.rus.ec',
            query: 'dogs',
            count: 5,
            sort_by: 'year',
            reverse: true
        };
        //const urlString = await libgen.search();
        libgen.search(options, (err, data) => {
            if (err) {
            } else {
            }
        });
    }

    return (
        <>
            <h1>Section Explore </h1>
            <div>
                <select id="dropdown" onChange={handleDropdownChange}>
                    <option value="title">title</option>
                    <option value="author">author</option>
                    <option value="periodical">periodical</option>
                    <option value="publisher">publisher</option>
                    <option value="year">year</option>
                    <option value="identifier">identifier</option>
                    <option value="year">md5</option>
                    <option value="extension">extension</option>
                </select>
            </div>

            <input
                placeholder="Search for..."
                onChange={handleInputChange}
            />
            <button onClick={onSearchClick}>Search</button>
        </>
    )

};

export default SectionExplore;

