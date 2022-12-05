export const pageTexts = {
  0: `Calculating the time it takes for a principal to double at a certain compound interest rate is of particular interest in most financial transactions, such as loans and investments. This method of calculation has been used for various purposes over thousands of years.`,
  1: `One way to calculate how long it will take for a loan or investment to double, use the rule of 72. This trick has been known for centuries, and was first mentioned in the Summa de Arithmetica by Luca Pacioli (1445–1514). It is a simple method that can be done with a basic calculator or mental arithmetic. Divide 72 by the interest rate and you will get the approximate amount of time it will take to double the loan or investment. For example, if you invested $100 and the interest rate was 5%, it would take about 14 years for it to become $200 (72/5 = 14).`,
  2: `Let's compare the answer given by the Rule of 72 to the total sum of compound interest after a certain number of years calculated using a formula. How accurate is the rule of 72 compared with this formula?`,
  3: `To calculate the exact doubling time, a knowledge of inverses, exponents and logarithms will be necessary. Even if math isn't your strong suit, it's important to know that figuring out this formula is possible!`,
  4: `In mathematics, it is common to have inverses. For instance, the inverse of addition is subtraction, and the inverse of multiplication is division. Additionally, the square root is the inverse of squaring, and logarithmic functions are the inverse of exponential functions.`,
  5: `Exponentiations are calculations that involve a base number and an exponent. To calculate an exponentiation, the base number is raised to the power of the exponent. The power is the number of times the base number is used in the calculation. For example, if the base number is 2 and the exponent is 3, then 2 to the power of 3 (2^3) is 8. This can be calculated by multiplying 2 three times: 2 * 2 * 2 = 8. This same concept can be related to compounding periods, with the power representing the number of times the calculation is performed.`,
  6: `A logarithm is the inverse of this. If 2 to the power of 3 equals 8, then the log of 8 equals 3, given a base log of 2. How can this be applied to compound doubling? If we have a principal and want to know how many compounding intervals it will take for that principal to double given a certain interest rate, we can use logarithms. For example, if the principal is 1 and the interest rate is 2, log2(2) = 1, meaning it will take 1 compounding interval for the principal to double.`,
  7: `Given an interest rate of 2%, we can use a logarithmic formula to calculate the number of iterations needed to double our principal. The formula is <strong>x = log(2) / log(interest rate/100)</strong>. In this case, the number of iterations is 35, meaning we must multiply our principal (1) by 1.02 35 times to reach 2.`,
  8: `The exact answer to the doubling time formula is usually a decimal number. To convert this number into years, months and weeks, we can parse it into a date format. We can then compare this answer with the total compound interest generated over a specified number of years.`,
  9: `To factor in compound intervals divide the interest rate by the number of compound intervals in a year, then divide the formula output by the same number.`,
  10: `Have you ever noticed that we measure time in 60-second minutes and 60-minute hours? This way of measuring time comes from the ancient Sexagesimal numeral system of Mesopotamia, which uses base 60 instead of the base 10 in our own numeral system. The Mesopotamians not only used this system for measuring time, but also for measuring the doubling of compound interest.`,
  11: `The annual interest rate in Mesopotamia remained consistent at between 10-33% for over a thousand years, in stark contrast to the volatile lending rates of today. We are left wondering how they managed to keep these interest rates so stable, and what methods they used to calculate compound doubling time.`,
};

/**
 * 6. Compound Doubling: A logarithm is the inverse of this. If 2 to the power of 3 equals 8, then the log of 8 equals 3, given a base log of 2. How can this be applied to compound doubling? Imagine we have a principal, and we want to know how many compounding intervals it will take for that principal to double given a certain interest rate. Or we could say, if the principal is 1, how many times must we multiply interest x for that number to become 2? Or we could say, if the number we are looking for is 2, what does the exponent need to be given a base log of the interest rate? the interest rate etc etc...)
 *  4: `The formula for calculating the doubling time is:`,
    5: `Where:`,
    6: `t = time in years`,
    7: `r = interest rate`,
    8: `n = number of compounding periods per year`,
    9: `ln = natural logarithm`,
 */