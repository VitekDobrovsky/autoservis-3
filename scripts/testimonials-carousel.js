const testimonials = document.querySelectorAll(".testimonial");

let range = [0, 1, 2];
const totalTestimonials = testimonials.length;

function showTestimonial(indexRange) {
  testimonials.forEach((testimonial, i) => {
    if (indexRange.includes(i)) {
      testimonial.classList.remove("testimonial--hidden");
      if (i === indexRange[1]) {
        testimonial.classList.add("testimonial--main");
      }
    } else {
      testimonial.classList.add("testimonial--hidden");
    }

    testimonial.style.order = range.indexOf(i);
  });
}

function updateRange(index) {
  if (index < 0) {
    index = totalTestimonials - 1;
  } else if (index >= totalTestimonials) {
    index = 0;
  }

  let range = [0, 0, 0];
  range[1] = index;
  range[0] = index - 1;
  range[2] = index + 1;
  if (index <= 0) {
    range[0] = totalTestimonials - 1;
  } else if (index >= totalTestimonials - 1) {
    range[2] = 0;
  }
  return range;
}

function moveTestimonialsBack() {
  let index = range[1] - 1;
  range = updateRange(index);
  showTestimonial(range);
}

function moveTestimonialsForward() {
  let index = range[1] + 1;
  range = updateRange(index);
  showTestimonial(range);
}

document.addEventListener("DOMContentLoaded", () => {
  showTestimonial(range);
});
