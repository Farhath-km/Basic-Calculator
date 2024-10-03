function displayAll(content)
{
    result.value += content;
}

function clearCalcScreen()
    {
        result.value = ""
    }
function evaluateExp()
    {
         try{
              result.value = eval(result.value)
            }
        catch{
             result.value="Invalid Expression"
            }
    }

function removeLastItem()
    {
         result.value=result.value.slice(0,-1)
     }
