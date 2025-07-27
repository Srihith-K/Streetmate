const reviews = [
    {
    name: "Priya Sharma",
    rating: 5,
    comment: "Excellent quality basmati rice! Ramu always delivers on time and the prices are very competitive. Been ordering from him for 2 years now. Highly recommended!",
    date: "2 days ago"
    },
    {
    name: "Arjun Patel",
    rating: 5,
    comment: "Great supplier! The rice quality is consistent and packaging is excellent. Ramu is very professional and responds quickly to queries. Will continue ordering.",
    date: "1 week ago"
    },
    {
    name: "Meera Singh",
    rating: 5,
    comment: "Best rice supplier in Mumbai! The jasmine rice is amazing - very fragrant and cooks perfectly. Fair pricing and reliable delivery. Five stars!",
    date: "2 weeks ago"
    },
    {
    name: "Raj Kumar",
    rating: 4,
    comment: "Good quality products and honest businessman. Sometimes delivery can be delayed during peak season, but overall very satisfied with the service.",
    date: "3 weeks ago"
    }
];

// Function to create star rating HTML
function createStarRating(rating) {
    let stars = '';
    for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
        stars += '<i class="fas fa-star"></i>';
    } else {
        stars += '<i class="far fa-star"></i>';
    }
    }
    return stars;
}

// Function to create review HTML
function createReviewHTML(review) {
    return `
    <div class="col-lg-6 mb-4">
        <div class="comment-card">
        <div class="d-flex justify-content-between align-items-start mb-2">
            <div>
            <h6 class="mb-1">${review.name}</h6>
            <div class="comment-rating">
                ${createStarRating(review.rating)}
            </div>
            </div>
            <small class="text-muted">${review.date}</small>
        </div>
        <p class="mb-0">"${review.comment}"</p>
        </div>
    </div>
    `;
}

// Function to display all reviews
function displayReviews() {
    const reviewsContainer = document.getElementById('reviewsContainer');
    reviewsContainer.innerHTML = '';
    reviews.forEach(review => {
    reviewsContainer.innerHTML += createReviewHTML(review);
    });
}

// Function to handle form submission
document.getElementById('reviewForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('reviewerName').value;
    const rating = parseInt(document.getElementById('reviewRating').value);
    const comment = document.getElementById('reviewComment').value;
    
    if (name && rating && comment) {
    // Add new review to the beginning of the array
    const newReview = {
        name: name,
        rating: rating,
        comment: comment,
        date: "Just now"
    };
    
    reviews.unshift(newReview);
    
    // Clear the form
    document.getElementById('reviewForm').reset();
    
    // Re-display reviews
    displayReviews();
    
    // Show success message
    alert('Thank you for your review!');
    }
});

// Contact button functionality
document.querySelectorAll('.contact-btn').forEach(btn => {
    btn.addEventListener('click', function() {
    const text = this.textContent.trim();
    if (text.includes('WhatsApp')) {
        window.open('https://wa.me/919876543210?text=Hi%20Ramu,%20I%20want%20to%20place%20an%20order', '_blank');
    } else if (text.includes('Email')) {
        window.location.href = 'mailto:ramu@traders.com?subject=Bulk%20Order%20Inquiry';
    }
    });
});

// Back button functionality
document.querySelector('.back-btn').addEventListener('click', function(e) {
    e.preventDefault();
    window.history.back();
});

// Display initial reviews when page loads
displayReviews();
