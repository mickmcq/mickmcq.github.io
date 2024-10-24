We discussed exercise 6.12 from the Diez (2019) book. I thought about it afterward and consulted the textbook solution, which disagreed with some of what I said. I think the textbook solution is correct, so here it is.

The hypotheses should be

$$
H_0: p = 0.5,
H_A: p < 0.5
$$

The test statistic should be

$$
z^{\star}= \frac{\hat{p} - p_0}{\text{\textit{SE}}}
$$

Substituting the values from the problem statement gives

$$
z^{\star}= \frac{0.48 - 0.5}{\sqrt{\frac{0.5\times 0.5}{331}}} = -0.73
$$

So the $p$-value is the probability that $\hat{p}$ is less than $0.48$ given that $p$ is $0.5$. This is the probability that $z^{\star} < -0.73$.
We can find out this probability in R using `pnorm(-0.73)`, giving $0.2326951$. Assume $\alpha = 0.05$ so we fail to reject $H_0$. In words, we are saying that the data do not provide strong evidence for the claim that less than half of American adults who decide not to go to college make this decision because they can not afford college.

By the way, the reason we use `pnorm()` is because we assume independence of the random sample of respondents and because the success / failure condition is satisfied with $n=331$ and $\hat{p}=0.48$.
