

export function useSentenceCase(str)
{
    let sentence = str.charAt(0).toUpperCase() + (str.slice(1)).toLowerCase();
    return sentence;
}