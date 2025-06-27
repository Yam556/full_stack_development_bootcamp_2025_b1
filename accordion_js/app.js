class FAQ {
    #items = [];
    constructor(title, intro) {
        this.title = title;
        this.intro = intro;
    }
    addItem(item) {
        this.items.push(item);
    }
    getItems() {
        return this.#items;
    }
    getQuestion() {
        return this.question;
    }
    getAnswer() {
        return this.answer;
    }
    renderTitle() {
        const titleElement = document.getElementById("title");
        const descriptionElement = document.getElementById("description");
        titleElement.textContent = this.title;
        descriptionElement.textContent = this.intro;
    }
    renderItems() {
       const items = this.#items.map(item => {
            return
             `<div>
                <h3 class="text-2xl bg-black text-white px-4 py-1>${item.question}</h3> 
                <p class=${!item.isanswerVisible ? "hidden" : ""} >${item.answer}</p>`
        });
        const accordionElement = document.getElementById("accordion");
        accordionElement.innerHTML = items.join("");
        const questionElements = accordionElement.querySelectorAll("h3");
        questionElements.forEach((questionElement) => {
            questionElement.addEventListener("click", () => {
            const answerElement = questionElement.nextElementSibling;
            answerElement.classList.toggle("hidden");
            });
        
        });
    }
}

class FAQItem {
    constructor(question, answer, isVisible = false) {
        this.question = question;
        this.answer = answer;
        this.isAnswerVisible = isVisible;
    }
    
}
(() => {
    const faq = new FAQ("Frequently Asked Questions", "Here are some common questions and answers.", "true");
    faq.renderTitle();
    const faqItem1= new FAQItem("What is JavaScript?", "JavaScript is a programming language used for web development.", "true");
    faq.addItem(faqItem1);
    const faqItem2 = new FAQItem("What is a closure?", "A closure is a function that retains access to its lexical scope even when the function is executed outside that scope.", true);
    faq.addItem(faqItem2);
    const faqItem3 = new FAQItem("What is an event loop?", "The event loop is a mechanism that allows JavaScript to perform non-blocking I/O operations by using an event-driven model.", true);
    faq.addItem(faqItem3);
})();