export const pageWorkLayout = (name, id, amount, question, answers) => {
  const answerList = answers.map((answer, index) => {
    return (`
            <input
              type="radio"
              id="radio__answer-${index}"
              class="radio__answer"
              name="answer"
              value="${answer}"
              data-answer = "${index}">
            <label 
                for="radio__answer-${index}">${answer}
            </label>
            <br>
    `);
  });

  return `
          <div class="header">
              <h1 class="header__text">${name}</h1>
          </div>
          <div class="cartQuiz cartQuiz--work-page">
           <span class="cartQuiz__info">Вопрос
                ${id} из ${amount}
           </span>
           <div class="cartQuiz__question">
                <h2>${question}</h2>
           </div>
           <div class="cartQuiz__answer">
                    ${answerList.join('')}
           </div>
                
          </div>
          <nav class="nav">
                    <button 
                      id="next" 
                      class="button" 
                      disabled
                      data-button = "next"
                      >Далее</button>
          </nav>
  `;
};
