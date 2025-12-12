document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('container');
    
    // Create the hamburger button
    const toggleBtn = document.createElement('div');
    toggleBtn.id = 'mobile-menu-toggle';
    toggleBtn.innerHTML = '<span></span><span></span><span></span>';
    
    // Add it to the container
    container.appendChild(toggleBtn);

    toggleBtn.addEventListener('click', function() {
        // Toggle 'active' on the PARENT container
        container.classList.toggle('active');
        
        // Toggle animation class on the button itself
        toggleBtn.classList.toggle('open');
    });
});