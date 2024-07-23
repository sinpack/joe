"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "scrollToID", {
    enumerable: true,
    get: function() {
        return scrollToID;
    }
});
const scrollToID = (id)=>{
    const element = document.getElementById(id);
    if (element) {
        const bounds = element.getBoundingClientRect();
        window.scrollBy({
            behavior: 'smooth',
            top: bounds.top - 100
        });
    }
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hZG1pbi91dGlsaXRpZXMvc2Nyb2xsVG9JRC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3Qgc2Nyb2xsVG9JRCA9IChpZDogc3RyaW5nKTogdm9pZCA9PiB7XG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZClcblxuICBpZiAoZWxlbWVudCkge1xuICAgIGNvbnN0IGJvdW5kcyA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICB3aW5kb3cuc2Nyb2xsQnkoe1xuICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnLFxuICAgICAgdG9wOiBib3VuZHMudG9wIC0gMTAwLFxuICAgIH0pXG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJzY3JvbGxUb0lEIiwiaWQiLCJlbGVtZW50IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImJvdW5kcyIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsIndpbmRvdyIsInNjcm9sbEJ5IiwiYmVoYXZpb3IiLCJ0b3AiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6Ijs7OzsrQkFBYUE7OztlQUFBQTs7O0FBQU4sTUFBTUEsYUFBYSxDQUFDQztJQUN6QixNQUFNQyxVQUFVQyxTQUFTQyxjQUFjLENBQUNIO0lBRXhDLElBQUlDLFNBQVM7UUFDWCxNQUFNRyxTQUFTSCxRQUFRSSxxQkFBcUI7UUFDNUNDLE9BQU9DLFFBQVEsQ0FBQztZQUNkQyxVQUFVO1lBQ1ZDLEtBQUtMLE9BQU9LLEdBQUcsR0FBRztRQUNwQjtJQUNGO0FBQ0YifQ==