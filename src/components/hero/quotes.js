const quotes = [
  `Too many people spend money they earned..to buy things they don't want..to impress people that they don't like. --Will Rogers`,
  `A wise person should have money in their head, but not in their heart. --Jonathan Swift`,
  `Wealth consists not in having great possessions, but in having few wants. --Epictetus`,
  `Money often costs too much. --Ralph Waldo Emerson`,
  `Everyday is a bank account, and time is our currency. No one is rich, no one is poor, we've got 24 hours each. --Christopher Rice`,
  `It's how you deal with failure that determines how you achieve success. --David Feherty`,
  `Frugality includes all the other virtues. --Cicero`,
  `I love money. I love everything about it. I bought some pretty good stuff. Got me a $300 pair of socks. Got a fur sink. An electric dog polisher. A gasoline powered turtleneck sweater. And, of course, I bought some dumb stuff, too. --Steve Martin`,
  `An investment in knowledge pays the best interest. --Benjamin Franklin`,
  `I will tell you the secret to getting rich on Wall Street. You try to be greedy when others are fearful. And you try to be fearful when others are greedy. --Warren Buffett`,
  `Annual income twenty pounds, annual expenditure nineteen six, result happiness. Annual income twenty pounds, annual expenditure twenty pound ought and six, result misery. --Charles Dickens`,
  `Opportunity is missed by most people because it is dressed in overalls and looks like work. --Thomas Edison`,
  `What we really want to do is what we are really meant to do. When we do what we are meant to do, money comes to us, doors open for us, we feel useful, and the work we do feels like play to us. --Julia Cameron`,
  `I never attempt to make money on the stock market. I buy on the assumption that they could close the market the next day and not reopen it for ten years. --Warren Buffett`,
  `A nickel ain't worth a dime anymore. --Yogi Berra`,
  `Money never made a man happy yet, nor will it. The more a man has, the more he wants. Instead of filling a vacuum, it makes one. --Benjamin Franklin`,
  `Many people take no care of their money till they come nearly to the end of it, and others do just the same with their time. --Johann Wolfgang von Goethe`,
  `Formal education will make you a living; self-education will make you a fortune. --Jim Rohn`,
  `Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver. --Ayn Rand`,
  `Financial peace isn't the acquisition of stuff. It's learning to live on less than you make, so you can give money back and have money to invest. You can't win until you do this. --Dave Ramsey`,
  `It is not the man who has too little, but the man who craves more, that is poor. --Seneca`,
  `It’s not the employer who pays the wages. Employers only handle the money. It’s the customer who pays the wages. --Henry Ford`,
  `He who loses money, loses much; He who loses a friend, loses much more; He who loses faith, loses all. --Eleanor Roosevelt`,
  `Happiness is not in the mere possession of money; it lies in the joy of achievement, in the thrill of creative effort. --Franklin D. Roosevelt`,
  `Empty pockets never held anyone back. Only empty heads and empty hearts can do that. --Norman Vincent Peale`,
  `It’s good to have money and the things that money can buy, but it’s good, too, to check up once in a while and make sure that you haven’t lost the things that money can’t buy. --George Lorimer`,
  `You can only become truly accomplished at something you love. Don’t make money your goal. Instead, pursue the things you love doing, and then do them so well that people can’t take their eyes off you. --Maya Angelou`,
  `Buy when everyone else is selling and hold until everyone else is buying. That’s not just a catchy slogan. It’s the very essence of successful investing. --J. Paul Getty`,
  `If money is your hope for independence you will never have it. The only real security that a man will have in this world is a reserve of knowledge, experience, and ability. --Henry Ford`,
  `If all the economists were laid end to end, they’d never reach a conclusion. --George Bernard Shaw`,
  `How many millionaires do you know who have become wealthy by investing in savings accounts? I rest my case. --Robert G. Allen`,
  `I made my money the old-fashioned way. I was very nice to a wealthy relative right before he died. --Malcolm Forbes`,
  `Innovation distinguishes between a leader and a follower. --Steve Jobs`,
  `The real measure of your wealth is how much you'd be worth if you lost all your money. --Anonymous`,
  `Money is a terrible master but an excellent servant. --P.T. Barnum`,
  `Try to save something while your salary is small; it’s impossible to save after you begin to earn more. --Jack Benny`,
  `Wealth is the ability to fully experience life. --Henry David Thoreau`,
  `The individual investor should act consistently as an investor and not as a speculator. --Ben Graham`,
  `I’m a great believer in luck, and I find the harder I work the more I have of it. --Thomas Jefferson`,
  `You must gain control over your money or the lack of it will forever control you. --Dave Ramsey`,
  `Investing should be more like watching paint dry or watching grass grow. If you want excitement, take $800 and go to Las Vegas. --Paul Samuelson`,
  `Every time you borrow money, you're robbing your future self. --Nathan W. Morris`,
  `Rich people have small TVs and big libraries, and poor people have small libraries and big TVs. --Zig Ziglar`,
  `Never spend your money before you have it. --Thomas Jefferson`,
  `The stock market is filled with individuals who know the price of everything, but the value of nothing. --Phillip Fisher`,
  `Wealth is not his that has it, but his that enjoys it. --Benjamin Franklin`,
  `It's not how much money you make, but how much money you keep, how hard it works for you, and how many generations you keep it for. --Robert Kiyosaki`,
  `I have not failed. I’ve just found 10,000 ways that won’t work. --Thomas A. Edison`,
  `If you don’t value your time, neither will others. Stop giving away your time and talents. Value what you know & start charging for it. --Kim Garst`,
  `Here’s to the crazy ones. The misfits. The rebels. The troublemakers. The round pegs in the square holes. The ones who see things differently. They’re not fond of rules. And they have no respect for the status quo. You can quote them, disagree with them, glorify or vilify them. About the only thing you can’t do is ignore them. Because they change things. They push the human race forward. And while some may see them as the crazy ones, we see genius. Because the people who are crazy enough to think they can change the world, are the ones who do. --Steve Jobs`,
  `The habit of saving is itself an education; it fosters every virtue, teaches self-denial, cultivates the sense of order, trains to forethought, and so broadens the mind. --T.T. Munger`,
  `Don't tell me what you value, show me your budget, and I'll tell you what you value.” --Joe Biden`,
  `If you live for having it all, what you have is never enough. --Vicki Robin`,
  `Before you speak, listen. Before you write, think. Before you spend, earn. Before you invest, investigate. Before you criticize, wait. Before you pray, forgive. Before you quit, try. Before you retire, save. Before you die, give. --William A. Ward`,
  `We make a living by what we get, but we make a life by what we give. --Winston Churchill`,
  `Wealth after all is a relative thing since he that has little and wants less is richer than he that has much and wants more. --Charles Caleb Colton`,
  `Not everything that can be counted counts, and not everything that counts can be counted. --Albert Einstein`,
  `It is time for us to stand and cheer for the doer, the achiever, the one who recognizes the challenge and does something about it. --Vince Lombardi`,
  `It's not the situation, but whether we react (negative) or respond (positive) to the situation that's important. --Zig Ziglar`,
  `A successful man is one who can lay a firm foundation with the bricks others have thrown at him. --David Brinkley`,
  `Let him who would enjoy a good future waste none of his present. --Roger Babson`,
  `Courage is being scared to death, but saddling up anyway. --John Wayne`,
  `Live as if you were to die tomorrow. Learn as if you were to live forever. --Mahatma Gandhi`,
  `Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do. --Mark Twain`,
  `It is our choices, that show what we truly are, far more than our abilities. --J. K Rowling`,
  `The successful warrior is the average man, with laser-like focus. --Bruce Lee`,
  `Develop success from failures. Discouragement and failure are two of the surest stepping stones to success. --Dale Carnegie`,
  `The question isn’t who is going to let me; it’s who is going to stop me. --Ayn Rand`,
  `Don’t let the fear of losing be greater than the excitement of winning. --Robert Kiyosaki`,
  `You can’t connect the dots looking forward; you can only connect them looking backwards. So you have to trust that the dots will somehow connect in your future. You have to trust in something – your gut, destiny, life, karma, whatever. This approach has never let me down, and it has made all the difference in my life. --Steve Jobs`,
  `Let no feeling of discouragement prey upon you, and in the end you are sure to succeed. --Abraham Lincoln`,
  `Screw it, Let’s do it! --Richard Branson`,
  `If your ship doesn’t come in, swim out to meet it! --Jonathan Winters`,
  `People often say that motivation doesn’t last. Well, neither does bathing – that’s why we recommend it daily. --Zig Ziglar`,
  `A real entrepreneur is somebody who has no safety net underneath them. --Henry Kravis`,
  `As long as you’re going to be thinking anyway, think big. --Donald Trump`,
  `The only place where success comes before work is in the dictionary. --Vidal Sassoon`,
  `Success is walking from failure to failure with no loss of enthusiasm. --Winston Churchill`,
  `Without continual growth and progress, such words as improvement, achievement, and success have no meaning. --Benjamin Franklin`,
  `If plan A fails, remember there are 25 more letters. --Chris Guillebeau`,
  `Do not go where the path may lead, go instead where there is no path and leave a trail. --Ralph Waldo Emerson`,
  `A journey of a thousand miles must begin with a single step. --Lao Tzu`,
  `Do the one thing you think you cannot do. Fail at it. Try again. Do better the second time. The only people who never tumble are those who never mount the high wire. This is your moment. Own it. --Oprah Winfrey`,
  `Believe you can and you’re halfway there. --Theodore Roosevelt`,
  `The Stock Market is designed to transfer money from the Active to the Patient. --Warren Buffett`,
  `I’m only rich because I know when I’m wrong…I basically have survived by recognizing my mistakes. --George Soros`,
  `Persist – don’t take no for an answer. If you’re happy to sit at your desk and not take any risk, you’ll be sitting at your desk for the next 20 years. --David Rubenstein`,
  `If you took our top fifteen decisions out, we’d have a pretty average record. It wasn’t hyperactivity, but a hell of a lot of patience. You stuck to your principles and when opportunities came along, you pounced on them with vigor. --Charlie Munger`,
  `When buying shares, ask yourself, would you buy the whole company? --Rene Rivkin`,
  `If you have trouble imagining a 20% loss in the stock market, you shouldn’t be in stocks. --John Bogle`,
  `My old father used to have a saying:  If you make a bad bargain, hug it all the tighter. --Abraham Lincoln`,
  `It takes as much energy to wish as it does to plan. --Eleanor Roosevelt`,
  `The four most expensive words in the English language are, ‘This time it’s different.’ --Sir John Templeton`,
  `I'd like to live as a poor man with lots of money. --Pablo Picasso`,
  `Fortune sides with him who dares. --Virgil`,
  `Wealth is like sea-water; the more we drink, the thirstier we become; and the same is true of fame. --Arthur Schopenhauer`,
  `If we command our wealth, we shall be rich and free. If our wealth commands us, we are poor indeed. --Edmund Burke`,
  `No wealth can ever make a bad man at peace with himself. --Plato`,
  `My formula for success is rise early, work late and strike oil. --JP Getty`,
];
