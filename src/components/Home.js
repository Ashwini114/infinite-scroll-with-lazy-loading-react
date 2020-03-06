import React, { useState } from "react"
import { IoMdArrowRoundBack } from 'react-icons/io';
import { FaSearch } from 'react-icons/fa';
import { Input, Row, Col } from 'reactstrap';
import ListItem from "./ListItem"
import { connect } from "react-redux";
import { searchItem } from "../js/actions"

const mapStateToProps = state => {
  return { list: state };
};
function mapDispatchToProps(dispatch) {
  return {
    searchItem: search_item => dispatch(searchItem(search_item))
  };
}


const Home = ({list,searchItem}) =>{
 
    const items=  list.page1.page.content_items.content;
    const[page_no,changePage] = useState(parseInt(list['page1']['page']['page-num-requested']))
   
    /** adding new items for display  */
    const addItems = () =>{
        
        let nextPage = "page"+(page_no+1);
        changePage(page_no+1)
        if(list[nextPage])
        {
          dataHandler([...data,...list[nextPage]['page']['content_items']['content']])
          console.log(list[nextPage]['page']);
        }
        
    }
    const [data,dataHandler] = useState(items);
    /*
      Loader to detect the currently loaded set to observe intersection
    */
    const loader = React.useRef(addItems)
    /*
    Observerves the intersection to check if the page is scrolled to the end, 
    if so it will add new elements to the page
    */
    const observer = React.useRef(new IntersectionObserver((entries)=>{
        const first = entries[0];
        if(first.isIntersecting)
        {
          loader.current();
        }
    },{threshold : 1}));
    const [element,setElement] = React.useState(null)
    /**
     * Whenever new items are added the loader is set to the currently added list
     */
    React.useEffect(()=>{
       loader.current = addItems
    },[addItems])
    /**
     * Checks for the current value of observer
     */
    React.useEffect(()=>{
        const currentElement = element;
        const currentObserver = observer.current;
        if(currentElement)
        {
            currentObserver.observe(currentElement);
        }
        return () => {
            if(currentElement)
            {
                currentObserver.unobserve(currentElement)
            }
        }
    },[element])
   
    /**
     * Element list
     */
    const display_items = data.map((item,index)=>{
       return(<Col key={index}><ListItem item={item} /></Col>)
    });
    const searchRef = React.useRef()
    const search_bar = <input type="text" name="search"  placeholder="Search" ref={searchRef} className="search-box" onKeyUp={()=>handleKeyUp()}/>;
    const [search_status,changeSearchStatus] = useState(false);
    
    const handleKeyUp = () =>{
      if(searchRef.current.value.length > 3)
      {
        searchItem(searchRef.current.value)
        if(list.search[0].length > 0)
        {
          dataHandler(list.search[0])
          changePage(3)
          
          
        }
        else{
          console.log("here")
          dataHandler([])
          changePage(3)
        }
      }
      else{
        dataHandler(items)
        changePage(1)
      }

    }
    
    const showSearchBar = () =>{
      
      changeSearchStatus(!search_status)
      dataHandler(items)
      changePage(1)
    }

 
    
    return(
        <div>
        <header>
            <h2>
               
                <IoMdArrowRoundBack className="back-btn"/>
                
                {list.page1.page.title}

                <FaSearch  className="search-btn" onClick={()=>showSearchBar()}/>
                

            </h2>
            {(search_status)?search_bar:""}
        </header>
        
        <Row xs="3">
        {display_items}
        </Row>
        <h1 ref={setElement}></h1>
        </div>
    )
}

const HomeContainer = connect(mapStateToProps,mapDispatchToProps)(Home);

export default HomeContainer