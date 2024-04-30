import Layouts from "@layouts/Layouts";

import { getAllPostsIds, getPostData, getRelatedPosts } from "@library/posts";
import Date from '@library/date';
import ImageView from "@components/ImageView";

import PageBanner from "@components/PageBanner";

const PostsDetail = ( props ) => {
  
  const postData = props.data;

  return (
    <Layouts>
      <PageBanner pageTitle={"Blog Detail"} pageDesc={"our values and vaulted us to the top of our industry."} />

      {/* Blog Style Three Start */}
      <section className="gap blog-style-one blog-detail detail-page">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="blog-post ">
                <div className="blog-image">
                  <figure>
                    <img src={postData.image} alt={postData.title} />
                  </figure>
                </div>
                <div className="blog-data">
                  <span className="blog-date"><Date dateString={postData.date} /></span>
                  <h2>{postData.title}</h2>
                  <div className="blog-author d-flex-all justify-content-start">
                    <div className="author-img">
                      <figure>
                        <img src={postData.author.avatar} alt={postData.author.name} />
                      </figure>
                    </div>
                    <div className="details">
                      <h3> <span>by</span> {postData.author.name}</h3>
                    </div>
                  </div>
                </div>
                
                <div className="blog-detail-content" dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />

                {typeof postData.gallery != "undefined" &&
                  <>
                    {postData.gallery.enabled == 1 &&
                      <div className="row justify-content-center">
                          {postData.gallery.items.map((item, key) => (
                          <div key={`gallery-item-${key}`} className={ postData.gallery.cols == 3 ? "col-lg-4" : "col-lg-6"}>
                            <figure>
                              <a data-fancybox="gallery" href={item.image}>
                                <img src={item.image} alt={item.alt} />
                              </a>
                            </figure>
                          </div>
                          ))}
                      </div>
                    }
                  </>
                }

                {typeof postData.additional != "undefined" &&
                  <>
                    {postData.additional.enabled == 1 &&
                    <div className="blog-detail-content" dangerouslySetInnerHTML={{ __html: postData.additional.content }} />
                    }
                  </>
                }

                <div className="category shape">
                  <p>Posted in {postData.category.map((cat, key) => (<a key={`category-item-${key}`}>{cat}</a>))}</p>
                </div>

                <div className="category shape social-medias">
                    <p>
                      Share this:
                    </p>
                    <ul>
                      <li><a href="#" onClick={(e) => {e.preventDefault();}}>Facebook</a></li>
                      <li><a href="#" onClick={(e) => {e.preventDefault();}}>Twitter</a></li>
                      <li><a href="#" onClick={(e) => {e.preventDefault();}}>LinkedIn</a></li>
                    </ul>
                </div>

                <div className="category shape comments">
                  <h3>Comments</h3>
                  <ul>
                    <li>
                      <div className="comment">
                        <div className="c-img">
                          <figure>
                            <img src="/img/comment-img-1.jpg" alt="Comment Image One" />
                          </figure>
                        </div>
                        <div className="c-data">
                          <h4>ElaineExpert</h4>
                          <span>July 31, 2022</span>
                          <p>Excellent post! I think a lot of people underestimate the importance of a good proofread. It’s not just about catching typos, it's about ensuring your message is clear and professional</p>
                          <a className="c-r-btn" href="#.">Reply</a>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="comment reply">
                        <div className="c-img">
                          <figure>
                            <img src="/img/comment-img-2.jpg" alt="Comment Image Two" />
                          </figure>
                        </div>
                        <div className="c-data">
                          <h4>WriterRick</h4>
                          <span>May 31, 2023</span>
                          <p>How often do you guys find that you need to break from your writing before you can effectively proofread? I usually need at least a few hours away from it.</p>
                          <a className="c-r-btn" href="#.">Reply</a>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="category shape form">
                  <h3>Leave a Comment</h3>
                  <p>Your email address will not be published.</p>
                  <form onSubmit={(e) => {e.preventDefault();}}>
                    <textarea placeholder="Comment" />
                    <div className="row">
                      <div className="form-group col-md-6">
                        <input type="text" name="text" placeholder="Complete Name" />
                      </div>
                      <div className="form-group col-md-6">
                        <input type="email" name="email" placeholder="Email Address" />
                      </div>
                    </div>
                    <div className="row align-items-center form-check">
                      <div className="col-lg-12 d-flex-all justify-content-start">
                        <input type="checkbox" className="form-check-inputt" id="exampleCheck24" />
                        <label className="form-check-labell" htmlFor="exampleCheck24"> Save my name, email, and website in this browser for the next time I comment.</label>
                      </div>
                    </div>
                    <button type="submit" className="theme-btn">Post Comment <i className="fa-solid fa-angles-right"></i></button>
                  </form>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <aside className="sidebar">
                <div className="box recent-posts">
                  <h3>Recent Posts</h3>
                  <ul>
                    <li>
                      <p>Play To Your Strengths And Supercharge Your Business</p>
                      <a href="/blog/play-to-your-strength-and-supercharge-your-business-4">
                        <i className="fa-solid fa-arrow-up-long"></i>
                      </a>
                    </li>
                    <li>
                      <p>10 Content Proofreading Tips To Catch More Avoidable</p>
                      <a href="/blog/10-content-proof-tips-to-catch-goofs-4">
                        <i className="fa-solid fa-arrow-up-long"></i>
                      </a>
                    </li>
                    <li>
                      <p>5 Steps To Create An Outstanding Marketing Plan</p>
                      <a href="/blog/5-steps-to-create-marketing-plan-4">
                        <i className="fa-solid fa-arrow-up-long"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="box recent-cmnts">
                  <h3>Recent Comments</h3>
                  <ul>
                    <li>
                      <h4>AlexWrites</h4>
                      <p>Great tips!</p>
                    </li>
                    <li>
                      <h4>CreativeKay</h4>
                      <p>Printing out the document really helps me</p>
                    </li>
                    <li>
                      <h4>ElaineExpert</h4>
                      <p>Homophones are my nemesis!</p>
                    </li>
                  </ul>
                </div>
                <div className="box categories">
                  <h3>Categories</h3>
                  <ul>
                    <li>
                      <a href="#" onClick={(e) => {e.preventDefault();}}>
                        <p>Uncategorized</p>
                      </a>
                    </li>
                    <li>
                      <a href="#" onClick={(e) => {e.preventDefault();}}>
                        <p>Construction</p>
                      </a>
                    </li>
                    <li>
                      <a href="#" onClick={(e) => {e.preventDefault();}}>
                        <p>Projects</p>
                      </a>
                    </li>
                    <li>
                      <a href="#" onClick={(e) => {e.preventDefault();}}>
                        <p>Expansion</p>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="box categories">
                  <h3>Archives</h3>
                  <ul>
                    <li>
                      <a href="#" onClick={(e) => {e.preventDefault();}}>
                        <p>July 2021</p>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="box categories">
                  <h3>Meta</h3>
                  <ul>
                    <li>
                      <a href="#" onClick={(e) => {e.preventDefault();}}>
                        <p>Log in</p>
                      </a>
                    </li>
                    <li>
                      <a href="#" onClick={(e) => {e.preventDefault();}}>
                        <p>Entries feed</p>
                      </a>
                    </li>
                    <li>
                      <a href="#" onClick={(e) => {e.preventDefault();}}>
                        <p>Comments feed</p>
                      </a>
                    </li>
                    <li>
                      <a href="#" onClick={(e) => {e.preventDefault();}}>
                        <p>WordPress.org</p>
                      </a>
                    </li>
                  </ul>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
      {/* Blog Style Three End */}
      
      <ImageView />
    </Layouts>
  );
};
export default PostsDetail;

export async function getStaticPaths() {
    const paths = getAllPostsIds()

    return {
      paths,
      fallback: false
    }
}

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id)
    const relatedPosts = await getRelatedPosts(params.id)

    return {
      props: {
        data: postData,
        related: relatedPosts
      }
    }
}