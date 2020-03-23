import os
import subprocess
import re
from datetime import datetime
import time
from statistics import mean 


numberOfTests = 100

tabuIteration = '1000'
tabuDuration = '10'
numberOfCities = '50'

final_solution = []
list_coverage = []
local_minimum = []

print(f"\n\nTest for Tabu Search with this config: \n\tIterations : {tabuIteration} \n\tDuration(Tabu Memory): {tabuDuration} \n\tNumber of Cities: {numberOfCities}")
for i in range(0, numberOfTests):
    process = subprocess.Popen(['./algo_tabou.exe', tabuIteration , tabuDuration, numberOfCities, 'distances_entre_villes_{}.txt'.format(numberOfCities)],stdout=subprocess.PIPE,stderr=subprocess.PIPE)
    stdout, stderr = process.communicate()
    result = stdout
    result = re.sub(r'\s', ' ', str(result))
    solution = (re.findall(r'([0-9]{4,7}) km', result))[-1]
    final_solution.append(int(solution))
    coverage = re.findall(r'On est dans un minimum local a l\'iteration ([0-9]+) ->', result)
    if coverage != []:
        coverage = int(coverage[0])+ 1
        if int(solution) != 5644:
            local_minimum.append(int(solution))
    else:
        coverage = int(tabuIteration)
    number_of_solution_before_coverage = coverage
    list_coverage.append(coverage)
    print('{} : best found solution is {} and found in interation {}, number of solutions before coverage : {}'.format(i, solution, coverage, number_of_solution_before_coverage))
    time.sleep( 1 )

print("Summary:")

optimum_result = len(list(filter(lambda x: x == 5644, final_solution)))

print(f'number of optimum solution found is {optimum_result}, so in {numberOfTests} runs of test we faced {(optimum_result/numberOfTests)*100}% coverage')
print(f'in average this test shows that we found the global optimum solution in iteration {mean(list_coverage)}\nand in worst we found it in iteration {max(list_coverage)} \nand in best case in iteration {max(list_coverage)}')
print(f'Totally, {sum(list_coverage)} cities visited before finding the global optimum in {numberOfTests} runs of this test\n\n\n') 

unique_local_minimum = list(dict.fromkeys(local_minimum))

print(f'totally the algorithm was stuck in local optimum {len(local_minimum)} times \nthere are {len(unique_local_minimum)} unique local minimum \nthe best local optimum is {min(unique_local_minimum)} \nthe worst local optimum is {max(unique_local_minimum)}')