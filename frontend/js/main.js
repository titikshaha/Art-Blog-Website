document.addEventListener("DOMContentLoaded", () => {
  // Splash screen timeout
  setTimeout(() => {
    const splashScreen = document.getElementById("splash-screen");
    splashScreen.classList.add("fade-out");

    // Wait for the fade-out transition to complete
    setTimeout(() => {
      splashScreen.style.display = 'none';
      document.querySelector("header").style.display = 'block';
      document.querySelector("main").style.display = 'block';
      document.querySelector("footer").style.display = 'block';
      loadContent("home"); // Load content first
      setActiveLink(document.getElementById("home-link")); // Set the active link
    }, 1000);
  }, 600); // Show splash screen for 0.6 seconds

  // Navigation event listeners
  document.querySelectorAll("nav ul li a").forEach(link => {
    link.addEventListener("click", event => {
      event.preventDefault();
      const section = event.target.getAttribute("href").substring(1);
      loadContent(section);
      setActiveLink(event.target); // Set the active link
    });
  });

  function loadContent(section) {
    const content = document.getElementById("content");
    switch (section) {
      case "home":
        content.innerHTML = `
          <div class="carousel-container">
            <div class="carousel">
              <div class="carousel-slide">
                <img src="images/bgimage1.jpg" alt="Carousel Image 1">
                <div class="carousel-caption">
                  <h1>A     R     T</h1>
                  </div>
              </div>
              <div class="carousel-slide">
                <img src="images/bgimage2.jpg" alt="Carousel Image 2">
                <div class="carousel-caption">
                  <h1>art is more than paintings</h1>
                  </div>
              </div>
              <div class="carousel-slide">
                <img src="images/bgimage3.jpg" alt="Carousel Image 3">
                <div class="carousel-caption">
                  <h1>art is anything, everything</h1>
                 </div>
              </div>
              <div class="carousel-slide">
                <img src="images/bgimage4.jpg" alt="Carousel Image 4">
                <div class="carousel-caption">
                  <h1>art is real and imaginary all the same</h1>
                  </div>
              </div>
              <div class="carousel-slide">
                <img src="images/bgimage5.jpg" alt="Carousel Image 5">
                <div class="carousel-caption">
                  <h1 style="align-items: center;">Explore My Kind of Art</h1>
                  </div>
              </div>
            </div>
          </div>
          
          <div class="para">
          Art and writing are my twin passions, interwoven threads that shape my perception of the world. Creating art feels like breathing colour into my thoughts, while writing allows me to paint with words. 
          <br> <br>
          Through this, I find inspiration in everyday moments and the beauty of human experience, connecting with the essence of what it means to feel truly alive.
           <br> 
           </div>
           <hr style="size: 3rem;  margin-top: 0.2rem;"> <br> <br>
          
            
  <div class ="art-images">
  <div class="image-grid">
     <div class="grid-item" data-image="images/artwork1.jpg" data-title="Lotus" data-description=" Beneath the layers of this vibrant lotus lies the story of transformation and resilience. Initially, this canvas held the image of a woman applying kohl. But I wasn’t happy with how it turned out so, embracing the creation, I transformed the piece, allowing a stunning lotus to bloom from the remnants of the past. This lotus, with its delicate petals and serene presence, symbolizes renewal and the unexpected beauty that can arise from embracing change and imperfection.
">
        <img src="images/artwork1.jpg" alt="Artwork 1">
      <div class="caption">Lotus</div>
        </div>
        <div class="grid-item" data-image="images/artwork2.jpg" data-title="Lotus" data-description=" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus quos, molestiae voluptates quis impedit ex accusamus earum doloremque. Excepturi natus laboriosam facilis quasi magni odio dolore maxime vero autem facere!">
        <img src="images/artwork2.jpg" alt="Artwork 2">
      <div class="caption">Artwork Title 2</div>
       </div>
       <div class="grid-item" data-image="images/artwork3.jpg" data-title="Lotus" data-description=" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus quos, molestiae voluptates quis impedit ex accusamus earum doloremque. Excepturi natus laboriosam facilis quasi magni odio dolore maxime vero autem facere!">
       <img src="images/artwork3.jpg" alt="Artwork 3">
      <div class="caption">Artwork Title 3</div>
      </div>
      <div class="grid-item" data-image="images/artwork4.jpg" data-title="Lotus" data-description=" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus quos, molestiae voluptates quis impedit ex accusamus earum doloremque. Excepturi natus laboriosam facilis quasi magni odio dolore maxime vero autem facere!">
      <img src="images/artwork4.jpg" alt="Artwork 4">
      <div class="caption">Artwork Title 4</div>
     </div>
    
   
     <div class="overlay-text">featured posts</div>

          <div class="grid-item" data-image="images/writeup1.jpg" data-title="Lotus" data-description=" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus quos, molestiae voluptates quis impedit ex accusamus earum doloremque. Excepturi natus laboriosam facilis quasi magni odio dolore maxime vero autem facere!">
        <img src="images/writeup1.jpg" alt="Write-Up 1">
        <div class="caption">Write-Up Title 1</div>
          </div>
          <div class="grid-item" data-image="images/writeup2.jpg" data-title="Lotus" data-description=" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus quos, molestiae voluptates quis impedit ex accusamus earum doloremque. Excepturi natus laboriosam facilis quasi magni odio dolore maxime vero autem facere!">
          <img src="images/writeup2.jpg" alt="Write-Up 2">
        <div class="caption">Write-Up Title 2</div>
         </div>
         <div class="grid-item" data-image="images/writeup3.jpg" data-title="Lotus" data-description=" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus quos, molestiae voluptates quis impedit ex accusamus earum doloremque. Excepturi natus laboriosam facilis quasi magni odio dolore maxime vero autem facere!">
         <img src="images/writeup3.jpg" alt="Write-Up 3">
        <div class="caption">Write-Up Title 3</div>
        </div>
        <div class="grid-item" data-image="images/writeup4.jpg" data-title="Lotus" data-description=" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus quos, molestiae voluptates quis impedit ex accusamus earum doloremque. Excepturi natus laboriosam facilis quasi magni odio dolore maxime vero autem facere!">
        <img src="images/writeup4.jpg" alt="Write-Up" 4">
        <div class="caption">Write-Up Title 4</div>
       </div>
  </div>
  
  <div id="image-modal" class="modal">
  <div class="modal-content">
    <span class="close">&times;</span>
    <div class="modal-left">
      <img id="modal-image" src="">
    </div>
    <div class="modal-right">
    <div class="modal-right">
      <h2 id="modal-title"></h2> 
      <p id="modal-description"> </p>
      <div class="box-1">
      <div class="btn btn-one" onclick="location.href='#artworks'">
        <span>Explore More</span>
      </div>
    </div>
    </div>
    </div>
  </div>
</div>`;


         
        // Ensure all images are loaded before initializing the carousel
        const images = content.querySelectorAll('.carousel-slide img');
        let loadedImages = 0;
        images.forEach(image => {
          if (image.complete) {
            loadedImages++;
          } else {
            image.addEventListener('load', () => {
              loadedImages++;
              if (loadedImages === images.length) {
                initializeCarousel();
              }
            });
          }
        });

        if (loadedImages === images.length) {
          initializeCarousel();
        }

        // Modal Logic
        {
          const modal = document.getElementById('image-modal');
          const modalImg = document.getElementById("modal-image");
          const modalTitle = document.getElementById("modal-title");
          const modalDescription = document.getElementById("modal-description");
          const span = document.getElementsByClassName("close")[0];
          const gridItems = document.getElementsByClassName("grid-item");
        
          for (let i = 0; i < gridItems.length; i++) {
            gridItems[i].onclick = function () {
              modalImg.src = this.dataset.image;
              modalTitle.textContent = this.dataset.title;
              modalDescription.textContent = this.dataset.description;
              modal.classList.add("show");
            }
          }
        
          span.onclick = function () {
            modal.classList.remove("show");
          }
        
          window.onclick = function (event) {
            if (event.target === modal) {
              modal.classList.remove("show");
            }
          }
        };
        
        {
          const reviewForm = document.getElementById('review-form');
          reviewForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const reviewText = document.getElementById('review-text').value;
            
            if (reviewText) {
              alert('Thank you for your review!');
              reviewForm.reset();
            } else {
              alert('Please enter a review before submitting.');
            }
          });
        };
        
         
      break;

      case "artworks":
        content.innerHTML = `
        <div class="artworks-container">
        <h1> artworks</h1>
        <section id="portraits">
      <h2>Portraits</h2>
      <div class="artwork-grid">
      <div class="artwork-item" data-image="images/artwork/portrait1.jpg" data-title="title" data-description="Lorem ">
      <img src="images/artwork/portrait1.jpg" alt="Portrait 1">
      <h3>Portrait 1</h3>
      <p>Description of Portrait 1</p>
    </div>
    <div class="artwork-item">
      <img src="images/artwork/portrait2.jpg" alt="Portrait 2">
      <h3>Portrait 2</h3>
      <p>Description of Portrait 2</p>
    </div>
    <div class="artwork-item">
      <img src="images/artwork/portrait3.jpg" alt="Portrait 2">
      <h3>Portrait 3</h3>
      <p>Description of Portrait 3</p>
    </div>
    <div class="artwork-item">
      <img src="images/artwork/portrait4.jpg" alt="Portrait 2">
      <h3>Portrait 4</h3>
      <p>Description of Portrait 4</p>
    </div>
    <div class="artwork-item">
      <img src="images/artwork/portrait5.jpg" alt="Portrait 2">
      <h3>Portrait 5</h3>
      <p>Description of Portrait 5</p>
    </div>
    <div class="artwork-item">
      <img src="images/artwork/portrait6.jpg" alt="Portrait 2">
      <h3>Portrait 6</h3>
      <p>Description of Portrait 6</p>
    </div>
    <div class="artwork-item">
      <img src="images/artwork/portrait7.jpg" alt="Portrait 2">
      <h3>Portrait 7</h3>
      <p>Description of Portrait 7</p>
    </div>
    <div class="artwork-item">
      <img src="images/artwork/portrait8.jpg" alt="Portrait 2">
      <h3>Portrait 8</h3>
      <p>Description of Portrait 8</p>
    </div>
    <div class="artwork-item" data-image="images/artwork/everything8.jpg" data-title="title" data-description="Lorem ">
      <img src="images/artwork/everything9.jpg" alt="Portrait9">
      <h3>Portrait 9</h3>
    </div>
   
        <!-- Add more portrait items as needed -->
      </div>
    </section>
    <section id="sketches">
      <h2>Sketches</h2>
      <div class="artwork-grid">
      <div class="artwork-item" data-image="images/artwork/sketch1.jpg" data-title="title" data-description="Lorem ">
          <img src="images/artwork/sketch1.jpg" alt="sketch1 1">
          <h3>Sketch 1</h3>
        </div>
        <div class="artwork-item" data-image="images/artwork/sketch2.jpg" data-title="title" data-description="Lorem ">
          <img src="images/artwork/sketch2.jpg" alt="sketch 2">
          <h3>Sketch 2</h3>
        </div>
        <div class="artwork-item" data-image="images/artwork/sketch3.jpg" data-title="title" data-description="Lorem ">
          <img src="images/artwork/sketch3.jpg" alt="sketch3">
          <h3>Sketch 3</h3>
        </div>
        <div class="artwork-item" data-image="images/artwork/sketch4.jpg" data-title="title" data-description="Lorem ">
          <img src="images/artwork/sketch4.jpg" alt="sketch 4">
          <h3>Sketch 4</h3>
        </div>
        <div class="artwork-item" data-image="images/artwork/sketch5.jpg" data-title="title" data-description="Lorem ">
          <img src="images/artwork/sketch5.jpg" alt="sketch5">
          <h3>Sketch 5</h3>
        </div>
        <div class="artwork-item" data-image="images/artwork/sketch6.jpg" data-title="title" data-description="Lorem ">
          <img src="images/artwork/sketch6.jpg" alt="sketch 6">
          <h3>Sketch 6</h3>
        </div>
        <div class="artwork-item" data-image="images/artwork/sketch7.jpg" data-title="title" data-description="Lorem ">
          <img src="images/artwork/sketch7.jpg" alt="sketch 7">
          <h3>Sketch 7</h3>
        </div>
        <div class="artwork-item" data-image="images/artwork/sketch8.jpg" data-title="title" data-description="Lorem ">
          <img src="images/artwork/sketch8.jpg" alt="sketch 8">
          <h3>Sketch 8</h3>
        </div>
        <div class="artwork-item" data-image="images/artwork/sketch9.jpg" data-title="title" data-description="Lorem ">
          <img src="images/artwork/sketch9.jpg" alt="sketch9">
          <h3>Sketch 9</h3>
        </div>
        <div class="artwork-item" data-image="images/artwork/sketch19.jpg" data-title="title" data-description="Lorem ">
          <img src="images/artwork/sketch10.jpg" alt="sketch10">
          <h3>Sketch 10</h3>
        </div>
        <div class="artwork-item" data-image="images/artwork/sketch11.jpg" data-title="title" data-description="Lorem ">
          <img src="images/artwork/sketch11.jpg" alt="sketch11">
          <h3>Sketch 11</h3>
        </div>
        <div class="artwork-item" data-image="images/artwork/sketch12.jpg" data-title="title" data-description="Lorem ">
          <img src="images/artwork/sketch1.jpg" alt="sketch12">
          <h3>Sketch 12</h3>
        </div>
        <div class="artwork-item" data-image="images/artwork/sketch13.jpg" data-title="title" data-description="Lorem ">
          <img src="images/artwork/sketch13.jpg" alt="sketch13">
          <h3>Sketch 13</h3>
        </div>
        <div class="artwork-item" data-image="images/artwork/sketch14.jpg" data-title="title" data-description="Lorem ">
          <img src="images/artwork/sketch14.jpg" alt="sketch14">
          <h3>Sketch 14</h3>
        </div>
        <div class="artwork-item" data-image="images/artwork/sketch15.jpg" data-title="title" data-description="Lorem ">
          <img src="images/artwork/sketch15.jpg" alt="sketch15">
          <h3>Sketch 15</h3>
        </div>
        <div class="artwork-item" data-image="images/artwork/sketch16.jpg" data-title="title" data-description="Lorem ">
          <img src="images/artwork/sketch16.jpg" alt="sketch16">
          <h3>Sketch 16</h3>
        </div>
        <div class="artwork-item" data-image="images/artwork/sketch17.jpg" data-title="title" data-description="Lorem ">
          <img src="images/artwork/sketch17.jpg" alt="sketch17">
          <h3>Sketch 17</h3>
        </div>
        <div class="artwork-item" data-image="images/artwork/sketch18.jpg" data-title="title" data-description="Lorem ">
          <img src="images/artwork/sketch18.jpg" alt="sketch18">
          <h3>Sketch 18</h3>
        </div>
        <div class="artwork-item" data-image="images/artwork/sketch19.jpg" data-title="title" data-description="Lorem ">
          <img src="images/artwork/sketch19.jpg" alt="sketch19">
          <h3>Sketch 19</h3>
        </div>
        <div class="artwork-item" data-image="images/artwork/sketch20.jpg" data-title="title" data-description="Lorem ">
          <img src="images/artwork/sketch20.jpg" alt="sketch20">
          <h3>Sketch 20</h3>
        </div>
        <!-- Add more sketch items as needed -->
      </div>
    </section>
    <section id="everything">
      <h2>everything in between</h2>
      <div class="artwork-grid">
      <div class="artwork-item" data-image="images/artwork/everything1.jpg" data-title="title" data-description="Lorem ">
      <img src="images/artwork/everything1.jpg" alt="everything1">
      <h3>Everything 1</h3>
    </div>
    <div class="artwork-item" data-image="images/artwork/everything2.jpg" data-title="title" data-description="Lorem ">
      <img src="images/artwork/everything2.jpg" alt="everything2">
      <h3>Everything 2</h3>
    </div>
    <div class="artwork-item" data-image="images/artwork/everything3.jpg" data-title="title" data-description="Lorem ">
      <img src="images/artwork/everything3.jpg" alt="everything3">
      <h3>Everything 3</h3>
    </div>
    <div class="artwork-item" data-image="images/artwork/everything4.jpg" data-title="title" data-description="Lorem ">
      <img src="images/artwork/everything4.jpg" alt="everything4">
      <h3>Everything 4</h3>
    </div>
    <div class="artwork-item" data-image="images/artwork/everything5.jpg" data-title="title" data-description="Lorem ">
      <img src="images/artwork/everything5.jpg" alt="everything5">
      <h3>Everything 5</h3>
    </div>
    <div class="artwork-item" data-image="images/artwork/everything6.jpg" data-title="title" data-description="Lorem ">
      <img src="images/artwork/everything6.jpg" alt="everything6">
      <h3>Everything 6</h3>
    </div>
    <div class="artwork-item" data-image="images/artwork/everything7.jpg" data-title="title" data-description="Lorem ">
      <img src="images/artwork/everything7.jpg" alt="everything7">
      <h3>Everything 7</h3>
    </div>
    <div class="artwork-item" data-image="images/artwork/everything8.jpg" data-title="title" data-description="Lorem ">
      <img src="images/artwork/everything8.jpg" alt="everything8">
      <h3>Everything 8</h3>
    </div>
    
    
        <!-- Add more modern items as needed -->
      </div>
    </section>
    <section id="scenic-paintings">
      <h2>Scenic Paintings</h2>
      <div class="artwork-grid">
      <div class="artwork-item" data-image="images/artwork/scenic1.jpg" data-title="title" data-description="Lorem ">
      <img src="images/artwork/scenic1.jpg" alt="scenic1">
      <h3>Scenic 1</h3>
    </div>
    <div class="artwork-item" data-image="images/artwork/scenic2.jpg" data-title="title" data-description="Lorem ">
      <img src="images/artwork/scenic2.jpg" alt="scenic2">
      <h3>Scenic 2</h3>
    </div>
    <div class="artwork-item" data-image="images/artwork/scenic3.jpg" data-title="title" data-description="Lorem ">
      <img src="images/artwork/scenic3.jpg" alt="scenic3">
      <h3>Scenic 3</h3>
    </div>
    <div class="artwork-item" data-image="images/artwork/scenic4.jpg" data-title="title" data-description="Lorem ">
      <img src="images/artwork/scenic1.jpg" alt="scenic4">
      <h3>Scenic 4</h3>
    </div>
    <div class="artwork-item" data-image="images/artwork/scenic5.jpg" data-title="title" data-description="Lorem ">
      <img src="images/artwork/scenic5.jpg" alt="scenic5">
      <h3>Scenic 5</h3>
    </div>
    <div class="artwork-item" data-image="images/artwork/scenic6.jpg" data-title="title" data-description="Lorem ">
      <img src="images/artwork/scenic6.jpg" alt="scenic6">
      <h3>Scenic 6</h3>
      </div>
    <div class="artwork-item" data-image="images/artwork/scenic7.jpg" data-title="title" data-description="Lorem ">
          <img src="images/artwork/scenic7.jpg" alt="scenic7">
          <h3>Scenic 7</h3>
    </div>
    <div class="artwork-item" data-image="images/artwork/scenic8.jpg" data-title="title" data-description="Lorem ">
          <img src="images/artwork/scenic8.jpg" alt="scenic8">
          <h3>Scenic 8</h3>
        </div>
    </div>
        <!-- Add more scenic painting items as needed -->
      </div>
    </section>
    
      

    <div id="image-modal" class="modal">
    <div class="modal-content">
      <span class="close">&times;</span>
      <div class="modal-left">
        <img id="modal-image" src="">
      </div>
      <div class="modal-right">
      <div class="modal-right">
        <h2 id="modal-title"></h2> 
        <p id="modal-description"> </p>
        <div class="box-1">
        <div class="btn btn-one" onclick="location.href='#artworks'">
          <span>Explore More</span>
        </div>
      </div>
      </div>
      </div>
    </div>
  </div>
    </div>
</div>
</div>
</div>
  </main>
        </div>`;

       
        loadArtworks();

        {
          const modal = document.getElementById('image-modal');
          const modalImg = document.getElementById("modal-image");
          const modalTitle = document.getElementById("modal-title");
          const modalDescription = document.getElementById("modal-description");
          const closeModal = document.getElementsByClassName("close")[0];
          const artworkItems = document.querySelectorAll('.artwork-item');
        
          artworkItems.forEach(item => {
            item.addEventListener('click', () => {
              modalImg.src = item.dataset.image;
              modalTitle.textContent = item.dataset.title;
              modalDescription.textContent = item.dataset.description;
              modal.style.display = "block";
            });
          });
        
          closeModal.addEventListener('click', () => {
            modal.style.display = "none";
          });
        
          window.addEventListener('click', (event) => {
            if (event.target === modal) {
              modal.style.display = "none";
            }
          });
          
        };
        break;

      case "blog":
        content.innerHTML = `<h2>Blog</h2><div id="blog-posts"></div>`;
        loadBlogPosts();
        break;

      case "aboutme":
        content.innerHTML = `
          <h2>About Me</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>`;
        break;

          }
  }

  function initializeCarousel() {
    const carousel = document.querySelector('.carousel');
    const totalSlides = document.querySelectorAll('.carousel-slide').length;
    let currentIndex = 0;

    function showSlide(index) {
      if (index < 0 || index >= totalSlides) {
        return;
      }
      currentIndex = index;
      const translateValue = -currentIndex * 100;
      carousel.style.transform = `translateX(${translateValue}%)`;
    }

    function nextSlide() {
      currentIndex = (currentIndex + 1) % totalSlides;
      showSlide(currentIndex);
    }

    const interval = setInterval(nextSlide, 4000); // Move to the next slide every 4 seconds

    showSlide(currentIndex); // Initialize first slide
  }

  function setActiveLink(activeLink) {
    document.querySelectorAll("nav ul li a").forEach(link => {
      link.classList.remove("active");
    });
    activeLink.classList.add("active");
  }

  async function loadArtworks() {
    try {
      const response = await fetch('/api/artworks');
      const data = await response.json();
      const artworksList = document.getElementById("artworks-list");
      artworksList.innerHTML = data.map(artwork => `
        <div class="artwork">
          <h3>${artwork.title}</h3>
          <img src="${artwork.imageUrl}" alt="${artwork.title}">
          <p>${artwork.description}</p>
        </div>
      `).join('');
    } catch (error) {
      console.error('Error fetching artworks:', error);
    }
  }

  async function loadBlogPosts() {
    try {
      const response = await fetch('/api/blogposts');
      const data = await response.json();
      const blogPosts = document.getElementById("blog-posts");
      blogPosts.innerHTML = data.map(post => `
        <div class="blog-post">
          <h3>${post.title}</h3>
          <p>${post.content}</p>
        </div>
      `).join('');
    } catch (error) {
      console.error('Error fetching blog posts:', error);
    }
  }
});
