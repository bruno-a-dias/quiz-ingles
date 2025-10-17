// ===================================
// FLASHCARDS SYSTEM - Progressive Learning
// ===================================

// Flashcards data structure
const flashcardsData = {
    level1: [
        { front: "One", back: "Um", example: "I have one apple.", phonetic: "/wʌn/" },
        { front: "Two", back: "Dois", example: "Two cats are playing.", phonetic: "/tuː/" },
        { front: "Three", back: "Três", example: "Three birds are singing.", phonetic: "/θriː/" },
        { front: "Four", back: "Quatro", example: "I see four cars.", phonetic: "/fɔːr/" },
        { front: "Five", back: "Cinco", example: "Five students are here.", phonetic: "/faɪv/" },
        { front: "Red", back: "Vermelho", example: "The apple is red.", phonetic: "/red/" },
        { front: "Blue", back: "Azul", example: "The sky is blue.", phonetic: "/bluː/" },
        { front: "Green", back: "Verde", example: "The grass is green.", phonetic: "/ɡriːn/" },
        { front: "Yellow", back: "Amarelo", example: "The sun is yellow.", phonetic: "/ˈjeloʊ/" },
        { front: "Black", back: "Preto", example: "The cat is black.", phonetic: "/blæk/" },
        { front: "Mother", back: "Mãe", example: "My mother is kind.", phonetic: "/ˈmʌðər/" },
        { front: "Father", back: "Pai", example: "My father works hard.", phonetic: "/ˈfɑːðər/" },
        { front: "Sister", back: "Irmã", example: "My sister is younger.", phonetic: "/ˈsɪstər/" },
        { front: "Brother", back: "Irmão", example: "My brother is tall.", phonetic: "/ˈbrʌðər/" },
        { front: "House", back: "Casa", example: "This is my house.", phonetic: "/haʊs/" },
        { front: "Car", back: "Carro", example: "I have a new car.", phonetic: "/kɑːr/" },
        { front: "Book", back: "Livro", example: "I am reading a book.", phonetic: "/bʊk/" },
        { front: "Table", back: "Mesa", example: "The table is clean.", phonetic: "/ˈteɪbl/" },
        { front: "Chair", back: "Cadeira", example: "Sit on the chair.", phonetic: "/tʃer/" },
        { front: "Water", back: "Água", example: "I drink water.", phonetic: "/ˈwɔːtər/" },
        { front: "Food", back: "Comida", example: "The food is delicious.", phonetic: "/fuːd/" },
        { front: "Apple", back: "Maçã", example: "I eat an apple.", phonetic: "/ˈæpl/" },
        { front: "Dog", back: "Cachorro", example: "The dog is friendly.", phonetic: "/dɔːɡ/" },
        { front: "Cat", back: "Gato", example: "The cat is sleeping.", phonetic: "/kæt/" },
        { front: "School", back: "Escola", example: "I go to school.", phonetic: "/skuːl/" },
        { front: "Friend", back: "Amigo/a", example: "She is my friend.", phonetic: "/frend/" },
        { front: "Hello", back: "Olá", example: "Hello! How are you?", phonetic: "/həˈloʊ/" },
        { front: "Goodbye", back: "Adeus/Tchau", example: "Goodbye, see you tomorrow!", phonetic: "/ɡʊdˈbaɪ/" },
        { front: "Thank you", back: "Obrigado/a", example: "Thank you very much!", phonetic: "/θæŋk juː/" },
        { front: "Please", back: "Por favor", example: "Please help me.", phonetic: "/pliːz/" },
        { front: "Yes", back: "Sim", example: "Yes, I agree.", phonetic: "/jes/" },
        { front: "No", back: "Não", example: "No, I don't want.", phonetic: "/noʊ/" },
        { front: "Good", back: "Bom/Boa", example: "This is good.", phonetic: "/ɡʊd/" },
        { front: "Bad", back: "Ruim/Mau", example: "That is bad.", phonetic: "/bæd/" },
        { front: "Big", back: "Grande", example: "The house is big.", phonetic: "/bɪɡ/" }
    ],
    level2: [
        { front: "Present Simple", back: "Presente Simples", example: "I work every day.", phonetic: "" },
        { front: "Past Simple", back: "Passado Simples", example: "I worked yesterday.", phonetic: "" },
        { front: "Future Simple", back: "Futuro Simples", example: "I will work tomorrow.", phonetic: "" },
        { front: "The", back: "O/A (artigo definido)", example: "The book is on the table.", phonetic: "/ðə/" },
        { front: "A/An", back: "Um/Uma (artigo indefinido)", example: "I have a car. She has an apple.", phonetic: "/ə/ /æn/" },
        { front: "This", back: "Este/Esta/Isto", example: "This is my car.", phonetic: "/ðɪs/" },
        { front: "That", back: "Aquele/Aquela/Aquilo", example: "That is your house.", phonetic: "/ðæt/" },
        { front: "These", back: "Estes/Estas", example: "These are my books.", phonetic: "/ðiːz/" },
        { front: "Those", back: "Aqueles/Aquelas", example: "Those are your pens.", phonetic: "/ðoʊz/" },
        { front: "In", back: "Em/Dentro de", example: "The cat is in the box.", phonetic: "/ɪn/" },
        { front: "On", back: "Em/Sobre", example: "The book is on the table.", phonetic: "/ɑːn/" },
        { front: "At", back: "Em (local/hora)", example: "I am at school.", phonetic: "/æt/" },
        { front: "To", back: "Para (direção)", example: "I go to work.", phonetic: "/tuː/" },
        { front: "From", back: "De (origem)", example: "I am from Brazil.", phonetic: "/frɑːm/" },
        { front: "With", back: "Com", example: "I go with my friend.", phonetic: "/wɪð/" },
        { front: "Can", back: "Poder (capacidade)", example: "I can swim.", phonetic: "/kæn/" },
        { front: "Must", back: "Dever (obrigação)", example: "You must study.", phonetic: "/mʌst/" },
        { front: "Should", back: "Deveria (conselho)", example: "You should eat vegetables.", phonetic: "/ʃʊd/" },
        { front: "May", back: "Poder (permissão)", example: "May I come in?", phonetic: "/meɪ/" },
        { front: "Would", back: "Gostaria/Faria", example: "I would like coffee.", phonetic: "/wʊd/" },
        { front: "What?", back: "O quê?", example: "What is your name?", phonetic: "/wɑːt/" },
        { front: "Where?", back: "Onde?", example: "Where do you live?", phonetic: "/wer/" },
        { front: "When?", back: "Quando?", example: "When do you work?", phonetic: "/wen/" },
        { front: "Why?", back: "Por quê?", example: "Why are you sad?", phonetic: "/waɪ/" },
        { front: "Who?", back: "Quem?", example: "Who is that person?", phonetic: "/huː/" },
        { front: "How?", back: "Como?", example: "How are you?", phonetic: "/haʊ/" },
        { front: "I am", back: "Eu sou/estou", example: "I am a teacher.", phonetic: "/aɪ æm/" },
        { front: "You are", back: "Você é/está", example: "You are my friend.", phonetic: "/juː ɑːr/" },
        { front: "He/She is", back: "Ele/Ela é/está", example: "She is beautiful.", phonetic: "/hiː/ʃiː ɪz/" },
        { front: "We are", back: "Nós somos/estamos", example: "We are students.", phonetic: "/wiː ɑːr/" }
    ],
    level3: [
        { front: "Shopping", back: "Compras", example: "I go shopping on weekends.", phonetic: "/ˈʃɑːpɪŋ/" },
        { front: "Restaurant", back: "Restaurante", example: "Let's eat at a restaurant.", phonetic: "/ˈrestərɑːnt/" },
        { front: "Airport", back: "Aeroporto", example: "I am at the airport.", phonetic: "/ˈerpɔːrt/" },
        { front: "Hotel", back: "Hotel", example: "We stayed at a nice hotel.", phonetic: "/hoʊˈtel/" },
        { front: "Bus", back: "Ônibus", example: "I take the bus to work.", phonetic: "/bʌs/" },
        { front: "Train", back: "Trem", example: "The train is fast.", phonetic: "/treɪn/" },
        { front: "Ticket", back: "Bilhete/Passagem", example: "I bought a ticket.", phonetic: "/ˈtɪkɪt/" },
        { front: "Money", back: "Dinheiro", example: "I need money.", phonetic: "/ˈmʌni/" },
        { front: "Price", back: "Preço", example: "What is the price?", phonetic: "/praɪs/" },
        { front: "Expensive", back: "Caro", example: "This car is expensive.", phonetic: "/ɪkˈspensɪv/" },
        { front: "Cheap", back: "Barato", example: "This shirt is cheap.", phonetic: "/tʃiːp/" },
        { front: "Breakfast", back: "Café da manhã", example: "I eat breakfast at 7am.", phonetic: "/ˈbrekfəst/" },
        { front: "Lunch", back: "Almoço", example: "Lunch is at noon.", phonetic: "/lʌntʃ/" },
        { front: "Dinner", back: "Jantar", example: "We have dinner together.", phonetic: "/ˈdɪnər/" },
        { front: "Tomorrow", back: "Amanhã", example: "I will go tomorrow.", phonetic: "/təˈmɑːroʊ/" },
        { front: "Yesterday", back: "Ontem", example: "I went yesterday.", phonetic: "/ˈjestərdeɪ/" },
        { front: "Today", back: "Hoje", example: "Today is Monday.", phonetic: "/təˈdeɪ/" },
        { front: "Week", back: "Semana", example: "I work five days a week.", phonetic: "/wiːk/" },
        { front: "Month", back: "Mês", example: "This month is January.", phonetic: "/mʌnθ/" },
        { front: "Year", back: "Ano", example: "Happy New Year!", phonetic: "/jɪr/" },
        { front: "Morning", back: "Manhã", example: "Good morning!", phonetic: "/ˈmɔːrnɪŋ/" },
        { front: "Afternoon", back: "Tarde", example: "Good afternoon!", phonetic: "/ˌæftərˈnuːn/" },
        { front: "Evening", back: "Noite (início)", example: "Good evening!", phonetic: "/ˈiːvnɪŋ/" },
        { front: "Night", back: "Noite", example: "Good night!", phonetic: "/naɪt/" },
        { front: "Weather", back: "Clima/Tempo", example: "The weather is nice.", phonetic: "/ˈweðər/" },
        { front: "Hot", back: "Quente", example: "Today is very hot.", phonetic: "/hɑːt/" },
        { front: "Cold", back: "Frio", example: "It is cold today.", phonetic: "/koʊld/" },
        { front: "Rain", back: "Chuva", example: "It is raining.", phonetic: "/reɪn/" },
        { front: "Sun", back: "Sol", example: "The sun is shining.", phonetic: "/sʌn/" },
        { front: "Cloud", back: "Nuvem", example: "I see many clouds.", phonetic: "/klaʊd/" },
        { front: "Wind", back: "Vento", example: "There is a strong wind.", phonetic: "/wɪnd/" },
        { front: "Temperature", back: "Temperatura", example: "What is the temperature?", phonetic: "/ˈtemprətʃər/" },
        { front: "Doctor", back: "Médico/a", example: "I need to see a doctor.", phonetic: "/ˈdɑːktər/" },
        { front: "Hospital", back: "Hospital", example: "He is in the hospital.", phonetic: "/ˈhɑːspɪtl/" },
        { front: "Medicine", back: "Remédio/Medicina", example: "Take this medicine.", phonetic: "/ˈmedɪsn/" },
        { front: "Sick", back: "Doente", example: "I am sick today.", phonetic: "/sɪk/" },
        { front: "Healthy", back: "Saudável", example: "She is very healthy.", phonetic: "/ˈhelθi/" },
        { front: "Pain", back: "Dor", example: "I have a pain.", phonetic: "/peɪn/" },
        { front: "Tired", back: "Cansado/a", example: "I am tired.", phonetic: "/ˈtaɪərd/" },
        { front: "Happy", back: "Feliz", example: "I am happy today.", phonetic: "/ˈhæpi/" }
    ],
    level4: [
        { front: "Although", back: "Embora/Apesar de", example: "Although it was raining, we went out.", phonetic: "/ɔːlˈðoʊ/" },
        { front: "However", back: "No entanto/Porém", example: "I like coffee. However, I prefer tea.", phonetic: "/haʊˈevər/" },
        { front: "Therefore", back: "Portanto/Por isso", example: "It's late; therefore, we must go.", phonetic: "/ˈðerfɔːr/" },
        { front: "Besides", back: "Além disso", example: "Besides, we have no time.", phonetic: "/bɪˈsaɪdz/" },
        { front: "Furthermore", back: "Além do mais", example: "Furthermore, the price is too high.", phonetic: "/ˈfɜːrðərmɔːr/" },
        { front: "Unless", back: "A menos que", example: "Unless you hurry, you'll be late.", phonetic: "/ʌnˈles/" },
        { front: "Whether", back: "Se (condicional)", example: "I don't know whether he will come.", phonetic: "/ˈweðər/" },
        { front: "Whereas", back: "Enquanto que", example: "She likes tea, whereas I prefer coffee.", phonetic: "/werˈæz/" },
        { front: "Nevertheless", back: "Ainda assim", example: "It was expensive; nevertheless, I bought it.", phonetic: "/ˌnevərðəˈles/" },
        { front: "Meanwhile", back: "Enquanto isso", example: "Meanwhile, I'll prepare dinner.", phonetic: "/ˈmiːnwaɪl/" },
        { front: "Present Perfect", back: "Presente Perfeito", example: "I have lived here for 5 years.", phonetic: "" },
        { front: "Past Perfect", back: "Passado Perfeito", example: "I had finished before you arrived.", phonetic: "" },
        { front: "Future Perfect", back: "Futuro Perfeito", example: "I will have finished by tomorrow.", phonetic: "" },
        { front: "Present Continuous", back: "Presente Contínuo", example: "I am working now.", phonetic: "" },
        { front: "Past Continuous", back: "Passado Contínuo", example: "I was sleeping when you called.", phonetic: "" },
        { front: "Used to", back: "Costumava", example: "I used to live in Paris.", phonetic: "/juːst tuː/" },
        { front: "Would rather", back: "Preferiria", example: "I would rather stay home.", phonetic: "/wʊd ˈræðər/" },
        { front: "Had better", back: "É melhor que", example: "You had better hurry.", phonetic: "/hæd ˈbetər/" },
        { front: "Ought to", back: "Deveria", example: "You ought to study more.", phonetic: "/ɔːt tuː/" },
        { front: "Neither... nor", back: "Nem... nem", example: "Neither Tom nor Mary came.", phonetic: "/ˈniːðər... nɔːr/" },
        { front: "Either... or", back: "Ou... ou", example: "Either you or I must go.", phonetic: "/ˈiːðər... ɔːr/" },
        { front: "Both... and", back: "Tanto... quanto", example: "Both John and Mary are here.", phonetic: "/boʊθ... ænd/" },
        { front: "Not only... but also", back: "Não apenas... mas também", example: "He's not only smart but also kind.", phonetic: "" },
        { front: "As soon as", back: "Assim que", example: "Call me as soon as you arrive.", phonetic: "/æz suːn æz/" },
        { front: "As long as", back: "Desde que/Enquanto", example: "You can stay as long as you want.", phonetic: "/æz lɔːŋ æz/" },
        { front: "In case", back: "Caso/No caso de", example: "Take an umbrella in case it rains.", phonetic: "/ɪn keɪs/" },
        { front: "So that", back: "Para que/De modo que", example: "I saved money so that I could travel.", phonetic: "/soʊ ðæt/" },
        { front: "Even though", back: "Mesmo que/Embora", example: "Even though I'm tired, I'll help you.", phonetic: "/ˈiːvən ðoʊ/" },
        { front: "As if", back: "Como se", example: "He acts as if he were rich.", phonetic: "/æz ɪf/" },
        { front: "Provided that", back: "Desde que/Contanto que", example: "You can go, provided that you return early.", phonetic: "/prəˈvaɪdɪd ðæt/" },
        { front: "Whenever", back: "Sempre que", example: "Come whenever you want.", phonetic: "/wenˈevər/" },
        { front: "Wherever", back: "Onde quer que", example: "I'll follow you wherever you go.", phonetic: "/werˈevər/" },
        { front: "Whatever", back: "O que quer que", example: "Do whatever you like.", phonetic: "/wɑːtˈevər/" },
        { front: "Whoever", back: "Quem quer que", example: "Whoever comes first wins.", phonetic: "/huːˈevər/" },
        { front: "Whichever", back: "Qualquer que", example: "Choose whichever you prefer.", phonetic: "/wɪtʃˈevər/" }
    ],
    level5: [
        { front: "Accomplish", back: "Realizar/Conquistar", example: "She accomplished her goals.", phonetic: "/əˈkɑːmplɪʃ/" },
        { front: "Acquire", back: "Adquirir", example: "He acquired new skills.", phonetic: "/əˈkwaɪər/" },
        { front: "Adequate", back: "Adequado", example: "The space is adequate for our needs.", phonetic: "/ˈædɪkwət/" },
        { front: "Analyze", back: "Analisar", example: "We need to analyze the data.", phonetic: "/ˈænəlaɪz/" },
        { front: "Approach", back: "Abordagem/Aproximar", example: "We need a different approach.", phonetic: "/əˈproʊtʃ/" },
        { front: "Assess", back: "Avaliar", example: "Teachers assess student performance.", phonetic: "/əˈses/" },
        { front: "Assume", back: "Presumir/Assumir", example: "I assume you're ready.", phonetic: "/əˈsuːm/" },
        { front: "Benefit", back: "Benefício/Beneficiar", example: "Exercise has many benefits.", phonetic: "/ˈbenɪfɪt/" },
        { front: "Capable", back: "Capaz", example: "She is capable of great things.", phonetic: "/ˈkeɪpəbl/" },
        { front: "Circumstance", back: "Circunstância", example: "Under these circumstances, we can't proceed.", phonetic: "/ˈsɜːrkəmstæns/" },
        { front: "Collaborate", back: "Colaborar", example: "We must collaborate on this project.", phonetic: "/kəˈlæbəreɪt/" },
        { front: "Comprehensive", back: "Abrangente/Completo", example: "This is a comprehensive study.", phonetic: "/ˌkɑːmprɪˈhensɪv/" },
        { front: "Consist", back: "Consistir", example: "The team consists of five members.", phonetic: "/kənˈsɪst/" },
        { front: "Contribute", back: "Contribuir", example: "Everyone contributed to the success.", phonetic: "/kənˈtrɪbjuːt/" },
        { front: "Crucial", back: "Crucial", example: "This decision is crucial.", phonetic: "/ˈkruːʃl/" },
        { front: "Demonstrate", back: "Demonstrar", example: "Let me demonstrate how it works.", phonetic: "/ˈdemənstreɪt/" },
        { front: "Derive", back: "Derivar/Obter", example: "This word derives from Latin.", phonetic: "/dɪˈraɪv/" },
        { front: "Distinguish", back: "Distinguir", example: "Can you distinguish the difference?", phonetic: "/dɪˈstɪŋɡwɪʃ/" },
        { front: "Diverse", back: "Diverso/Variado", example: "We have a diverse team.", phonetic: "/daɪˈvɜːrs/" },
        { front: "Emphasize", back: "Enfatizar", example: "I must emphasize the importance of this.", phonetic: "/ˈemfəsaɪz/" },
        { front: "Encounter", back: "Encontrar/Deparar-se", example: "We encountered some problems.", phonetic: "/ɪnˈkaʊntər/" },
        { front: "Establish", back: "Estabelecer", example: "We need to establish clear rules.", phonetic: "/ɪˈstæblɪʃ/" },
        { front: "Evaluate", back: "Avaliar", example: "We will evaluate your performance.", phonetic: "/ɪˈvæljueɪt/" },
        { front: "Facilitate", back: "Facilitar", example: "This tool will facilitate the work.", phonetic: "/fəˈsɪlɪteɪt/" },
        { front: "Implement", back: "Implementar", example: "We will implement the new system.", phonetic: "/ˈɪmplɪment/" },
        { front: "Indicate", back: "Indicar", example: "The data indicates a trend.", phonetic: "/ˈɪndɪkeɪt/" },
        { front: "Maintain", back: "Manter", example: "We must maintain quality.", phonetic: "/meɪnˈteɪn/" },
        { front: "Obtain", back: "Obter", example: "How did you obtain this information?", phonetic: "/əbˈteɪn/" },
        { front: "Perspective", back: "Perspectiva", example: "From my perspective, it's correct.", phonetic: "/pərˈspektɪv/" },
        { front: "Potential", back: "Potencial", example: "She has great potential.", phonetic: "/pəˈtenʃl/" },
        { front: "Primarily", back: "Primariamente", example: "This is primarily a business decision.", phonetic: "/praɪˈmerəli/" },
        { front: "Proceed", back: "Prosseguir", example: "Please proceed with caution.", phonetic: "/prəˈsiːd/" },
        { front: "Relevant", back: "Relevante", example: "This information is relevant.", phonetic: "/ˈreləvənt/" },
        { front: "Significant", back: "Significativo", example: "This is a significant achievement.", phonetic: "/sɪɡˈnɪfɪkənt/" },
        { front: "Subsequent", back: "Subsequente", example: "Subsequent events proved him right.", phonetic: "/ˈsʌbsɪkwənt/" },
        { front: "Substantial", back: "Substancial", example: "We made substantial progress.", phonetic: "/səbˈstænʃl/" },
        { front: "Sufficient", back: "Suficiente", example: "Do we have sufficient time?", phonetic: "/səˈfɪʃnt/" },
        { front: "Undertake", back: "Empreender", example: "We will undertake this project.", phonetic: "/ˌʌndərˈteɪk/" },
        { front: "Utilize", back: "Utilizar", example: "We should utilize all resources.", phonetic: "/ˈjuːtəlaɪz/" },
        { front: "Vary", back: "Variar", example: "Prices vary depending on location.", phonetic: "/ˈveri/" },
        { front: "Whereas", back: "Considerando que", example: "Whereas option A is cheap, option B is better.", phonetic: "/werˈæz/" },
        { front: "Acknowledge", back: "Reconhecer", example: "I acknowledge my mistake.", phonetic: "/əkˈnɑːlɪdʒ/" },
        { front: "Advocate", back: "Defender/Advogado", example: "She advocates for change.", phonetic: "/ˈædvəkeɪt/" },
        { front: "Challenge", back: "Desafio/Desafiar", example: "This is a real challenge.", phonetic: "/ˈtʃælɪndʒ/" },
        { front: "Consequence", back: "Consequência", example: "Consider the consequences.", phonetic: "/ˈkɑːnsɪkwens/" }
    ],
    level6: [
        { front: "Beat around the bush", back: "Enrolar/Evitar o assunto", example: "Stop beating around the bush and tell me!", phonetic: "" },
        { front: "Break the ice", back: "Quebrar o gelo", example: "Let's play a game to break the ice.", phonetic: "" },
        { front: "Call it a day", back: "Encerrar o dia", example: "It's late, let's call it a day.", phonetic: "" },
        { front: "Cut to the chase", back: "Ir direto ao ponto", example: "Let's cut to the chase.", phonetic: "" },
        { front: "Hit the nail on the head", back: "Acertar em cheio", example: "You hit the nail on the head with that comment.", phonetic: "" },
        { front: "Once in a blue moon", back: "Muito raramente", example: "I see him once in a blue moon.", phonetic: "" },
        { front: "Piece of cake", back: "Moleza/Muito fácil", example: "This test was a piece of cake.", phonetic: "" },
        { front: "Pull someone's leg", back: "Brincar com alguém", example: "I'm just pulling your leg!", phonetic: "" },
        { front: "Speak of the devil", back: "Falando no diabo", example: "Speak of the devil, here he comes!", phonetic: "" },
        { front: "The ball is in your court", back: "A decisão é sua", example: "I've done my part, the ball is in your court.", phonetic: "" },
        { front: "Under the weather", back: "Indisposto/Doente", example: "I'm feeling under the weather today.", phonetic: "" },
        { front: "You can say that again", back: "Pode repetir/Concordo totalmente", example: "This is difficult. - You can say that again!", phonetic: "" },
        { front: "Notwithstanding", back: "Não obstante", example: "Notwithstanding the difficulties, we succeeded.", phonetic: "/ˌnɑːtwɪθˈstændɪŋ/" },
        { front: "Subsequently", back: "Posteriormente", example: "He was arrested and subsequently released.", phonetic: "/ˈsʌbsɪkwəntli/" },
        { front: "Presumably", back: "Presumivelmente", example: "Presumably, they will arrive soon.", phonetic: "/prɪˈzuːməbli/" },
        { front: "Nevertheless", back: "No entanto", example: "It was difficult; nevertheless, we completed it.", phonetic: "/ˌnevərðəˈles/" },
        { front: "Albeit", back: "Embora/Ainda que", example: "It was a good effort, albeit unsuccessful.", phonetic: "/ɔːlˈbiːɪt/" },
        { front: "Henceforth", back: "Doravante/Daqui em diante", example: "Henceforth, we will follow new rules.", phonetic: "/ˌhensˈfɔːrθ/" },
        { front: "Thereof", back: "Disso/Disto", example: "The contract and conditions thereof.", phonetic: "/ˌðerˈʌv/" },
        { front: "Whereby", back: "Pelo qual/Mediante o qual", example: "A system whereby students can vote.", phonetic: "/werˈbaɪ/" },
        { front: "Commence", back: "Começar (formal)", example: "The ceremony will commence at noon.", phonetic: "/kəˈmens/" },
        { front: "Endeavor", back: "Esforço/Esforçar-se", example: "We will endeavor to complete this.", phonetic: "/ɪnˈdevər/" },
        { front: "Inevitable", back: "Inevitável", example: "Change is inevitable.", phonetic: "/ɪnˈevɪtəbl/" },
        { front: "Paramount", back: "Supremo/Primordial", example: "Safety is of paramount importance.", phonetic: "/ˈpærəmaʊnt/" },
        { front: "Profound", back: "Profundo", example: "He made a profound statement.", phonetic: "/prəˈfaʊnd/" },
        { front: "Reluctant", back: "Relutante", example: "He was reluctant to help.", phonetic: "/rɪˈlʌktənt/" },
        { front: "Scrutinize", back: "Examinar minuciosamente", example: "We must scrutinize the details.", phonetic: "/ˈskruːtənaɪz/" },
        { front: "Ubiquitous", back: "Onipresente/Ubíquo", example: "Smartphones are ubiquitous today.", phonetic: "/juːˈbɪkwɪtəs/" },
        { front: "Conundrum", back: "Enigma/Dilema", example: "This is quite a conundrum.", phonetic: "/kəˈnʌndrəm/" },
        { front: "Exemplify", back: "Exemplificar", example: "This case exemplifies the problem.", phonetic: "/ɪɡˈzemplɪfaɪ/" },
        { front: "Mitigate", back: "Mitigar/Atenuar", example: "We must mitigate the risks.", phonetic: "/ˈmɪtɪɡeɪt/" },
        { front: "Pragmatic", back: "Pragmático", example: "We need a pragmatic solution.", phonetic: "/præɡˈmætɪk/" },
        { front: "Resilient", back: "Resiliente", example: "The team proved to be resilient.", phonetic: "/rɪˈzɪliənt/" },
        { front: "Viable", back: "Viável", example: "Is this a viable option?", phonetic: "/ˈvaɪəbl/" },
        { front: "Articulate", back: "Articulado/Articular", example: "She articulated her ideas clearly.", phonetic: "/ɑːrˈtɪkjuleɪt/" },
        { front: "Coherent", back: "Coerente", example: "Your argument is coherent.", phonetic: "/koʊˈhɪrənt/" },
        { front: "Inherent", back: "Inerente", example: "There are inherent risks.", phonetic: "/ɪnˈhɪrənt/" },
        { front: "Intrinsic", back: "Intrínseco", example: "It has intrinsic value.", phonetic: "/ɪnˈtrɪnsɪk/" },
        { front: "Preclude", back: "Impedir/Excluir", example: "This doesn't preclude other options.", phonetic: "/prɪˈkluːd/" },
        { front: "Tangible", back: "Tangível", example: "We need tangible results.", phonetic: "/ˈtændʒəbl/" }
    ]
};


// State management
let currentLevel = null;
let currentCardIndex = 0;
let sessionCards = [];
let sessionStats = {
    correct: 0,
    needPractice: 0,
    total: 0
};

// Initialize flashcards app
function initFlashcards() {
    // Check if we're on the flashcards page
    if (!document.getElementById('dashboardView')) return;
    
    loadProgress();
    updateDashboard();
    setupEventListeners();
}

// Setup event listeners
function setupEventListeners() {
    // Level start buttons
    document.querySelectorAll('.btn-start-level').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const level = e.target.getAttribute('data-level');
            if (level) {
                startLevel(level);
            }
        });
    });
    
    // Back to dashboard button
    const backBtn = document.getElementById('backToDashboard');
    if (backBtn) {
        backBtn.addEventListener('click', () => {
            document.getElementById('studyView').style.display = 'none';
            document.getElementById('dashboardView').style.display = 'block';
            updateDashboard();
        });
    }
    
    // Flashcard flip
    const flashcard = document.getElementById('flashcard');
    if (flashcard) {
        flashcard.addEventListener('click', () => {
            flashcard.classList.toggle('flipped');
        });
    }
    
    // Response buttons
    const needPracticeBtn = document.getElementById('needPracticeBtn');
    const gotItBtn = document.getElementById('gotItBtn');
    
    if (needPracticeBtn) {
        needPracticeBtn.addEventListener('click', () => handleResponse(false));
    }
    
    if (gotItBtn) {
        gotItBtn.addEventListener('click', () => handleResponse(true));
    }
    
    // Volume button
    const volumeBtn = document.getElementById('volumeBtn');
    if (volumeBtn) {
        volumeBtn.addEventListener('click', pronounceWord);
    }
    
    // Session complete modal buttons
    const continueBtn = document.getElementById('continueStudying');
    if (continueBtn) {
        continueBtn.addEventListener('click', () => {
            const modal = bootstrap.Modal.getInstance(document.getElementById('sessionCompleteModal'));
            modal.hide();
            startLevel(currentLevel);
        });
    }
    
    // Modal close button - update dashboard when closing
    const sessionCompleteModal = document.getElementById('sessionCompleteModal');
    if (sessionCompleteModal) {
        sessionCompleteModal.addEventListener('hidden.bs.modal', function () {
            // Go back to dashboard view
            document.getElementById('studyView').style.display = 'none';
            document.getElementById('dashboardView').style.display = 'block';
            // Update dashboard to show new unlocked levels
            updateDashboard();
        });
    }
}


// Load progress from localStorage
function loadProgress() {
    const progress = AppUtils.Storage.get('flashcardsProgress', {
        level1: { completed: 0, total: 35, unlocked: true },
        level2: { completed: 0, total: 30, unlocked: false },
        level3: { completed: 0, total: 40, unlocked: false },
        level4: { completed: 0, total: 35, unlocked: false },
        level5: { completed: 0, total: 45, unlocked: false },
        level6: { completed: 0, total: 40, unlocked: false },
        streak: 0,
        totalMastered: 0,
        lastStudyDate: null
    });
    
    // Update streak
    updateStreak(progress);
    
    return progress;
}


// Save progress to localStorage
function saveProgress(progress) {
    AppUtils.Storage.set('flashcardsProgress', progress);
}

// Update streak
function updateStreak(progress) {
    const today = new Date().toDateString();
    const lastStudy = progress.lastStudyDate;
    
    if (lastStudy !== today) {
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        
        if (lastStudy === yesterday.toDateString()) {
            progress.streak += 1;
        } else if (lastStudy !== today) {
            progress.streak = 1;
        }
        
        progress.lastStudyDate = today;
        saveProgress(progress);
    }
}

// Update dashboard statistics
function updateDashboard() {
    const progress = loadProgress();
    
    // Update stats
    document.getElementById('studyStreak').textContent = progress.streak;
    document.getElementById('totalMastered').textContent = progress.totalMastered;
    document.getElementById('currentLevel').textContent = getCurrentLevel(progress);
    document.getElementById('overallProgress').textContent = calculateOverallProgress(progress) + '%';
    
    // Update level cards
    updateLevelCards(progress);
}

// Get current active level
function getCurrentLevel(progress) {
    for (let i = 6; i >= 1; i--) {
        if (progress[`level${i}`].unlocked) {
            return i;
        }
    }
    return 1;
}

// Calculate overall progress
function calculateOverallProgress(progress) {
    let totalCards = 0;
    let completedCards = 0;
    
    for (let i = 1; i <= 6; i++) {
        const level = progress[`level${i}`];
        totalCards += level.total;
        completedCards += level.completed;
    }
    
    return totalCards > 0 ? Math.round((completedCards / totalCards) * 100) : 0;
}

// Update level cards status
function updateLevelCards(progress) {
    // Get mastered cards data
    const masteredCards = AppUtils.Storage.get('masteredCards', {});
    
    console.log('Updating level cards. Mastered cards:', masteredCards);
    
    for (let i = 1; i <= 6; i++) {
        const levelCard = document.querySelector(`[data-level="${i}"]`);
        const levelData = progress[`level${i}`];
        
        if (levelCard && levelData) {
            // Count actual mastered cards for this level
            let levelMasteredCount = 0;
            const levelKey = `level${i}`;
            const levelCards = flashcardsData[levelKey];
            
            if (levelCards && levelCards.length > 0) {
                for (let j = 0; j < levelCards.length; j++) {
                    const cardKey = `${i}-${j}`;
                    if (masteredCards[cardKey]) {
                        levelMasteredCount++;
                    }
                }
                
                // Update the progress data
                levelData.completed = levelMasteredCount;
                
                console.log(`Level ${i}: ${levelMasteredCount}/${levelCards.length} cards mastered`);
            }
            
            const progressBar = levelCard.querySelector('.progress-bar');
            const percentage = levelData.total > 0 
                ? Math.round((levelData.completed / levelData.total) * 100) 
                : 0;
            
            if (progressBar) {
                progressBar.style.width = percentage + '%';
                progressBar.textContent = percentage + '%';
                progressBar.setAttribute('aria-valuenow', percentage);
            }
            
            // Update unlock status
            if (levelData.unlocked) {
                levelCard.classList.remove('locked');
                levelCard.classList.add('unlocked');
            } else {
                // Check if should unlock next level
                if (i > 1) {
                    const prevLevel = progress[`level${i-1}`];
                    const prevLevelCards = flashcardsData[`level${i-1}`];
                    
                    if (prevLevelCards && prevLevelCards.length > 0) {
                        let prevLevelMasteredCount = 0;
                        for (let j = 0; j < prevLevelCards.length; j++) {
                            const cardKey = `${i-1}-${j}`;
                            if (masteredCards[cardKey]) {
                                prevLevelMasteredCount++;
                            }
                        }
                        
                        prevLevel.completed = prevLevelMasteredCount;
                        const prevPercentage = (prevLevelMasteredCount / prevLevelCards.length) * 100;
                        
                        console.log(`Level ${i-1} mastery: ${prevPercentage.toFixed(1)}%`);
                        
                        if (prevPercentage >= 80) {
                            levelData.unlocked = true;
                            levelCard.classList.remove('locked');
                            levelCard.classList.add('unlocked');
                            saveProgress(progress);
                            showUnlockAnimation(i);
                        }
                    }
                }
            }
        }
    }
    
    // Save the updated progress
    saveProgress(progress);
}



// Show unlock animation
function showUnlockAnimation(level) {
    AppUtils.showToast(`Nível ${level} desbloqueado! 🎉`, 'success');
}

// Start studying a level
function startLevel(level) {
    currentLevel = level;
    const levelKey = `level${level}`;
    const cards = flashcardsData[levelKey];
    
    if (!cards || cards.length === 0) {
        AppUtils.showToast('Este nível ainda não possui cartões', 'warning');
        return;
    }
    
    // Prepare session - create cards with original indices
    sessionCards = cards.map((card, index) => ({
        ...card,
        originalIndex: index
    }));
    
    // Shuffle the cards
    sessionCards = shuffleArray(sessionCards);
    
    currentCardIndex = 0;
    sessionStats = { correct: 0, needPractice: 0, total: sessionCards.length };
    
    // Show study view
    document.getElementById('dashboardView').style.display = 'none';
    document.getElementById('studyView').style.display = 'block';
    
    // Update UI
    const levelTitles = {
        '1': 'Nível 1 - Palavras Básicas',
        '2': 'Nível 2 - Gramática Básica',
        '3': 'Nível 3 - Vida Cotidiana',
        '4': 'Nível 4 - Gramática Intermediária',
        '5': 'Nível 5 - Vocabulário Avançado',
        '6': 'Nível 6 - Construtor de Fluência'
    };
    
    document.getElementById('levelTitle').textContent = levelTitles[level] || `Nível ${level}`;
    
    // Show first card
    showCard(0);
}



// Show a specific card
function showCard(index) {
    if (index >= sessionCards.length) {
        endSession();
        return;
    }
    
    const card = sessionCards[index];
    const flashcard = document.getElementById('flashcard');
    
    // Remove flipped state
    flashcard.classList.remove('flipped');
    
    // Update card content
    document.getElementById('cardFront').textContent = card.front;
    document.getElementById('cardBack').textContent = card.back;
    document.getElementById('cardExample').textContent = card.example;
    document.getElementById('cardPhonetic').textContent = card.phonetic;
    
    // Update counter
    document.getElementById('cardCounter').textContent = 
        `Cartão ${index + 1} de ${sessionCards.length}`;
    
    // Update progress bar
    const progress = ((index) / sessionCards.length) * 100;
    document.getElementById('sessionProgress').style.width = progress + '%';
}

// Handle user response
function handleResponse(correct) {
    const currentCard = sessionCards[currentCardIndex];
    const originalIndex = currentCard.originalIndex;
    
    if (correct) {
        sessionStats.correct++;
        
        // Mark this specific card as mastered using its ORIGINAL index
        const cardId = `${currentLevel}-${originalIndex}`;
        const masteredCards = AppUtils.Storage.get('masteredCards', {});
        
        if (!masteredCards[cardId]) {
            masteredCards[cardId] = true;
            AppUtils.Storage.set('masteredCards', masteredCards);
            
            // Update progress
            const progress = loadProgress();
            const levelKey = `level${currentLevel}`;
            
            // Count unique mastered cards for this level
            let levelMasteredCount = 0;
            const levelCards = flashcardsData[levelKey];
            
            if (levelCards) {
                for (let i = 0; i < levelCards.length; i++) {
                    const cardKey = `${currentLevel}-${i}`;
                    if (masteredCards[cardKey]) {
                        levelMasteredCount++;
                    }
                }
            }
            
            progress[levelKey].completed = levelMasteredCount;
            progress.totalMastered = Object.keys(masteredCards).length;
            saveProgress(progress);
            
            console.log(`Card ${originalIndex} of level ${currentLevel} marked as mastered`);
            console.log(`Level ${currentLevel} progress: ${levelMasteredCount}/${levelCards.length}`);
        }
    } else {
        sessionStats.needPractice++;
    }
    
    // Move to next card
    currentCardIndex++;
    showCard(currentCardIndex);
}


// End study session
function endSession() {
    // Calculate accuracy
    const accuracy = sessionStats.total > 0 
        ? Math.round((sessionStats.correct / sessionStats.total) * 100) 
        : 0;
    
    // Update modal content
    document.getElementById('cardsStudied').textContent = sessionStats.total;
    document.getElementById('accuracyRate').textContent = accuracy + '%';
    
    // Update dashboard after session ends
    updateDashboard();
    
    // Show modal
    const modal = new bootstrap.Modal(document.getElementById('sessionCompleteModal'));
    modal.show();
    
    // When modal closes, update dashboard again
    const modalElement = document.getElementById('sessionCompleteModal');
    modalElement.addEventListener('hidden.bs.modal', function () {
        updateDashboard();
    }, { once: true });
}


// Pronounce word using Web Speech API
function pronounceWord() {
    const card = sessionCards[currentCardIndex];
    if (!card) return;
    
    const utterance = new SpeechSynthesisUtterance(card.front);
    utterance.lang = 'en-US';
    utterance.rate = 0.9;
    speechSynthesis.speak(utterance);
}

// Shuffle array helper
function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initFlashcards);
} else {
    initFlashcards();
}
