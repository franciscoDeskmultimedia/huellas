import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPostsForHome, getPageData } from '../lib/graphcms'
import Head from 'next/head'
import IntroComponent from 'components/IntroComponent';
import { CMS_NAME } from '../lib/constants'
import Script from 'next/script'
import ImageText from 'components/ImageText'



export default function Index({ page }) {
  // const heroPost = posts[0]
  // const morePosts = posts.slice(1)
  console.log(page)
  return (
    <>
      {/* <Layout preview={preview}>
        <Head>
          <title>Next.js Blog Example with {CMS_NAME}</title>
        </Head>
        <Container>
          <Intro />
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout> */}
        <Head>
          <title>Next.js Blog Example with {CMS_NAME}</title>
          <script
          src="https://code.jquery.com/jquery-3.6.0.min.js"
          integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
          crossorigin="anonymous"></script>
        </Head>
        
       {/* <!-- loader  --> */}
      {/* <div className="loader_bg">
         <div className="loader"><img src="loading.gif" alt="#" /></div>
      </div> */}
      {/* <!-- end loader -->
      <!-- end loader -->
      <!-- header --> */}
      <header>
         {/* <!-- header inner --> */}
         <div className="header">
         </div>
      </header>
      {/* <!-- end header inner -->
      <!-- end header -->
      <!-- banner --> */}
      <span className="toggle_side_bar" onClick="openNav1()"><i className="fa fa-bars"></i></span>
      
      {/* <div className="main_section">
         <div className="container padddd">
            <div className="row">
               <div className="col-md-6 padding_lrtb0">
                  <div className="bg">
                     <div className="text-bg">
                        <span>Quieres conoces mas sobre tu perro</span>
                        <h1>A GOOD <br/>FRIEND?  </h1>
                        <p>There are many variations of passages of Lorem Ipsum available, but the
majorityThere are many variations of passages of Lorem Ipsum available, but the majorityThere are
many variations of passages of Lorem Ipsum available, but the majority</p>
                        <a className="read_more" href="#">Contact Us</a>
                        <a className="read_more" href="#">Buy Now</a>
                     </div>
                  </div>
               </div> */}
               <IntroComponent intro={page.builder}></IntroComponent>
            {/* </div>
         </div>
      </div> */}
      {/* <!-- end banner -->
      <!-- about --> */}
      {page.builder.map((item)=>{
        console.log(item.__typename)
        return(
          <>
            {item.__typename == 'ComboImageText' 
              ? 
                   <ImageText key={item.id} imageTextComponent={item}></ImageText>
                
              : null
            }
          </>
        )
      })}
      
      {/* <!-- end about -->
      <!-- Our --> */}
      {/* <div className="Our">
         <div className="container">
            <div className="row d_flex">
               <div className="col-md-4">
                  <div className="titlepage">
                     <h2>Our Dogs</h2>
                     <p>It is a long established fact that a reader will be distracted by the read
ble content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a
more-or-less normal distribution of letters, as opposed to using 'Content here, and</p>
                     <a className="read_more" href="#">See More</a>
                  </div>
               </div>
               <div className="col-md-8">
                  <div id="Our_slide" className="carousel slide Our_banner" data-ride="carousel">
                     <ol className="carousel-indicators">
                        <li data-target="#Our_slide" data-slide-to="0" className="active"></li>
                        <li data-target="#Our_slide" data-slide-to="1"></li>
                        <li data-target="#Our_slide" data-slide-to="2"></li>
                     </ol>
                     <div className="carousel-inner">
                        <div className="carousel-item active">
                           <div className="container">
                              <div className="carousel-caption relative">
                                 <figure><img src="dog.jpg" alt="#"/></figure>
                              </div>
                           </div>
                        </div>
                        <div className="carousel-item">
                           <div className="container">
                              <div className="carousel-caption relative">
                                 <figure><img src="dog.jpg" alt="#"/></figure>
                              </div>
                           </div>
                        </div>
                        <div className="carousel-item">
                           <div className="container">
                              <div className="carousel-caption relative">
                                 <figure><img src="dog.jpg" alt="#"/></figure>
                              </div>
                           </div>
                        </div>
                     </div>
                     <a className="carousel-control-prev" href="#Our_slide" role="button" data-slide="prev">
                     <i className="fa fa-angle-left" aria-hidden="true"></i>
                     </a>
                     <a className="carousel-control-next" href="#Our_slide" role="button" data-slide="next">
                     <i className="fa fa-angle-right" aria-hidden="true"></i>
                     </a>
                  </div>
               </div>
            </div>
         </div>
      </div> */}
      {/* <!-- Our -->
      <!-- contact --> */}
      <div className="contact">
         <div className="container-fluid">
            <div className="row d_flex">
               <div className="col-md-7 padding-left">
                  <div className="cont">
                     <figure><img src="conm.jpg" alt="#"/></figure>
                  </div>
               </div>
               <div className="col-md-5">
                  <form id="contact" className="main_form">
                     <div className="row">
                        <div className="col-md-12 ">
                           <div className="titlepage">
                              <h2>Contact</h2>
                           </div>
                        </div>
                        <div className="col-md-12 ">
                           <input className="contactus" placeholder="Name" type="type" name="Name" /> 
                        </div>
                        <div className="col-md-12">
                           <input className="contactus" placeholder="Email" type="type" name="Email" /> 
                        </div>
                        <div className="col-md-12">
                           <input className="contactus" placeholder="Phone" type="type" name="Phone" />                          
                        </div>
                        <div className="col-md-12">
                           <textarea className="textarea" placeholder="Message" type="type" Message="Name">Message </textarea>
                        </div>
                        <div className="col-md-12">
                           <button className="send_btn">Send</button>
                        </div>
                     </div>
                  </form>
               </div>
            </div>
         </div>
      </div>
      {/* <!-- end contact -->
      <!--  footer --> */}
      <footer>
         <div className="footer">
            {/* <div className="container">
               <div className="row d_flex">
                  <div className="col-md-6">
                     <div className="address">
                        <h3>Subscribe Now</h3>
                     </div>
                     <form className="bottom_form">
                        <div className="row">
                           <div className="col-md-12">
                              <input className="enter" placeholder="Enter Your email" type="text" name="Enter Your email" />
                           </div>
                        </div>
                        <button className="sub_btn">Submit</button>
                     </form>
                     <ul className="Menu_footer">
                        <li><a href="#">Ph. 0123456789</a> </li>
                        <li><a href="#">Email.demo@gmail.com</a> </li>
                     </ul>
                  </div>
                  <div className="col-md-6">
                     <div className="map">
                        <figure><img src="map.jpg" alt="#"/></figure>
                     </div>
                  </div>
               </div>
            </div> */}
            <div className="copyright">
               <div className="container">
                  <div className="row">
                     <div className="col-md-8 offset-md-2">
                        <p>© 2022 All Rights Reserved. <a href="https://html.design/"> Free  html
Templates</a></p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </footer>
      {/* <!-- end footer -->
      <!-- Javascript files--> */}
      <Script src="js/jquery.min.js" />
      <Script src="js/popper.min.js" />
      <Script src="js/bootstrap.bundle.min.js" />
      <Script src="js/jquery-3.0.0.min.js" />
      {/* <!-- sidebar --> */}
      <Script src="js/jquery.mCustomScrollbar.concat.min.js" />
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.js" />
      <Script src="js/custom.js" />
      
    </>
  )
}

export async function getStaticProps({ preview = false }) {
  const page = (await getPageData()) || []
  return {
    props: { page },
  }
}
