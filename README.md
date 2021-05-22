#test-questionnaire 
###Краткое описание
Проект реализует систему анкетирования. Планируется обрабатывать анкеты нескольких типов, а именно:
1. ответ на вопрос в виде да/нет;
2. в виде - один ответ из нескольких вариантов;
3. несколько ответов на один вопрос;
4. следующий вопрос зависит от ответа на предедущий.
###Входные данные
Входные данные представляют собой структурированный json файл: 
```
{
  "name": "",
  "description": "",
  "instruction": "",
  "questions": [
    {
      "id": index,
      "question": ""
    },
    ..............
    {
      "id": index,
      "question": ""
    }
  ],
  "keys": [
    {
      "positive": [],
      "negative": [],
      "multiplier": number
    },
    ..............
    {
       "positive": [],
       "negative": [],
       "multiplier": number
    }
  ],
  "limit": number,
  "answer": [],
  "legend": [
    {
      "type": "",
      "description": ""
    },
    ..............
    {
      "type": "",
      "description": ""
    },
  ]
}
```  
В дальнейшем предполагается добавить использование базы данных.
#####Описание полей json файла
###UML диаграммы классов
### Описание файлов в проекте
###Как запустить
###Демо
