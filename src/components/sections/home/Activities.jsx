

import React, { Component } from 'react'
import axios from 'axios'

class Activities extends Component {
    constructor(){
        super()
        this.state = {
            posts : [],
            photos: []
        }
    }
    componentDidMount(){
        this.getdata()
        this.getphoto()
    }   
    getphoto=()=>{ 
        axios.get('https://jsonplaceholder.typicode.com/photos?_limit=5')
        .then((res)=>{ this.setState({photos:res.data})
        // console.log(res) 
        })
        .catch((error)=>{
            console.log(error)
        }) 
    }
    getdata=()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5')
        .then((res)=>{this.setState({posts:res.data})
        // console.log(res)
        })
        .catch((error)=>{
            console.log(error)
        }) 
    }   
    render() {
        // console.log(this.state.posts)
        // console.log(this.state.photos)
        return (
            <div>
                <div  className='divhightA'>
                    <h2>Current Activities</h2>
                    { this.state.photos.map(val=> { 
                        let theclassname = '';let test = val.id %2 !==0?  theclassname = 'leftimg':theclassname = 'rightimg'
                        return ( <div></div>
                            //  <img className={theclassname} src={val.url} alt={val.title}/>
                              )
                        })
                    }

                    { this.state.posts.map(val=> {
                        let theclassname = '';
                        let test = val.id %2 !==0?  theclassname = 'leftdiv':theclassname = 'rightdiv'
                        return (
                            <div className={theclassname} key={val.id}>
                                <h4>{val.title} :</h4>
                                <p>{val.body}.</p>
                            </div>)
                        })
                    }
                </div>

            </div>
        );
    }
}
export default Activities;

