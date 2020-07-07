

import React, { Component } from 'react'
import axios from 'axios'
import { Card,  Image ,Grid, Item} from 'semantic-ui-react'
// import a from '../../images/a.jpg';

class Activities extends Component {
    constructor(){
        super()
        this.state = {
            posts : [],
            photos: [],
            test:[]
        }
    }
    componentDidMount(){
        this.getphoto()
        this.getdata()
    }   
    getphoto=()=>{ 
        axios.get('https://jsonplaceholder.typicode.com/photos?_limit=2')
        .then((res)=>{ 
            this.setState({photos:res.data})
        // console.log(res) 
        })
        .catch((error)=>{
            console.log(error)
        }) 
    }
    getdata=()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts?_limit=2')
        .then((res)=> {
             // console.log(res)
            this.setState({posts:res.data})
            this.getTest()
        })
        .catch((error)=>{
            console.log(error)
        }) 
    }  
    getTest = e => {
        let i;
        let arrTest = [];
        for(i=0; i<this.state.posts.length; i++){
            for(var j=0; j<this.state.photos.length; j++){
                if (j === i){
                    let testObj = {
                        post: this.state.posts[i],
                        photo:  this.state.photos[i]
                    }
                    arrTest.push(testObj)
                }
            }
        }
        this.setState({test: arrTest})
    } 
    render() {
        // console.log(this.state.posts)
        // console.log(this.state.test)
        // console.log(this.state.photos)
        return (
            <div className=''>
                <div  className='divhightA'>
                    <h2>Current Activities</h2>
                    <div className='grid_div'>
                        { this.state.test && this.state.test.map(val=>{
                                let theclassname = val.post.id %2 !==1?  'leftdiv': 'rightdiv';
                                return(
                                    <div className={theclassname}>
                                         {/* <Card>
                                            <Card.Content>
                                                <Image
                                                floated='right'
                                                size='huge'
                                                src='https://react.semantic-ui.com/images/avatar/large/steve.jpg'
                                                />
                                                <Card.Header>Steve Sanders</Card.Header>
                                                <Card.Meta>Friends of Elliot</Card.Meta>
                                                <Card.Description>
                                                Steve wants to add you to the group <strong>best friends</strong>
                                                </Card.Description>
                                            </Card.Content>
                                           
                                            </Card> */}
                                        
                                            <Grid>
                                                

                                                <Grid.Column width={10}>
                                                    <Item>
                                                        <p>sK;JABS;kbaf;sK;JABS;kbaf;kEBs;kEBkEBF</p>
                                                        <h3>{val.post.title} :</h3>
                                                    </Item>
                                            
                                                    <Item>
                                                        <span > in 2015</span>
                                                    </Item>
                                                    
                                                    <Item className='date'>
                                                    {val.post.body}
                                                    </Item>

                                                </Grid.Column>  
                                                <Grid.Column width={6}>
                                                    <Image
                                                    floated='right'
                                                    width='100%'
                                                    height='100%'
                                                    // size='huge'
                                                    src={val.photo.url}
                                                    />
                                                    
                                                </Grid.Column> 
                                            </Grid>
                                      
                                    </div>    
                                )
                                
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
}
export default Activities;
