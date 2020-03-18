const helathyItems = [
  {
    id: 1,
    itemName: 'Boiled Eggs',
    url:
      'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhUTEhMWFhUXGBcYFRUYGBsaFxgXGBcXFxUVFRgYHiggGBolGxUVITEiJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGy0lICUtLS0vLi0tLS0vLS4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSstLS0tLS0tLSstLS0tLf/AABEIALcBEwMBIgACEQEDEQH/xAAcAAAABwEBAAAAAAAAAAAAAAAAAQIDBAUGBwj/xABHEAACAAQDBAYHBQcDAwMFAAABAgADESEEEjEFIkFRBhNhcYGRMkJSobHR8AcUYsHhIzNygpKi8RVDY1Oy0iTi8lRzhJOz/8QAGgEAAgMBAQAAAAAAAAAAAAAAAAECAwQFBv/EAC4RAAICAQMCBQQCAQUAAAAAAAABAhEDEiExBEEFEyJRYYGRobHw8XEUQlLB0f/aAAwDAQACEQMRAD8A08uVUUCe0glsbV/3MFNPEG7S27oXKYUPpMCtRX95Mlpz5YmSfMCCVgABvOGUimjzJSaoTwxEngeIERzMozF39l2mqLEaSccnIj0JixpM5IDEmrNoVczFGhNpeMlj2W9GYsTAxBoVAuVK+qrt6Uon/ozRdTwJiCtc1aBGDEZT6KTmG9KPPDzxcHQGJUghxlykqVZQhqCyL+8w71/3ZZup4iGA1tNFaWfTKlbjSYyofSXiJ8kjxAjkG0jTEvVlNwcy1ytUA5lvYNXNThmpHYsYgyZg5oAH60XNBZMSvNl9GYvEVjnWB2VLn4qckxQGDWVCWNdT1UuWMxStSCzAAERVli5KkWY5KJP6JThWgf4/+UdHwkwU9Me/5xhpHRtpTUlOajWWTnen4ll1CfzNFzs3ajqcrDMRqE36fxZKhfExneOS7F+uL7mrVh7Y9/zhVB7Q8v1ihbaUuYd2gym7ai3Co/OJ8rFyqWcHu+ekRp+w9ifl/EPIQRTt9wiOk9dLeLCvlEuXIc3ooHbWChDBUcz7vlDM2Yg1J7qn8otVwq8bwYwqeyPKvxh6GGpFD14bQL4m/kKwCB2eC/ONEFA0AEHSDyw1mRl44M+QVr2mnwEPPbVvrxMaOZhJbekinvAiLiNjSmGhX+E/kbQnjY1NGZGJUtlWp5kmg90LmOg1fwBb5w7juiTCrSXqeRt+nwigxReUcs5Cp4cPI6GK2mixNMvOuQWqfEH5w2cUpsGXuNRFOm0UqK1J5Q6+LU/7YHaTESRLOLAIqLcwxMImzKbwNRW/MRDM1ALnTl+XGG50403VIB4mAZcYbFIdTfv/ACgT5qDUmvC5rFXhZYWhoSe00ESLFszHwEAEvClj7QHbEliRY6RHXEUFh5whpjH0vkP184AGpdC54ActDAxmKDEIBodYc1tw5AUg0kgaCkABq4AIpmNO4CG8IQNak9gt5w5lGmvZw8oXU8BABFXA75c7oPDWJQyjS/eaQWUnj8YSZZ5/lAA20pTcuYEK6rs+vOBAA5PFizPT0XdxWqsDlk41QbjTJMHfWEFDWyhWDsKH0Jc5hvym5yJ61I4AxbmXx4g2L3FTuMH/AAsRkf8AFRuMQJsrQKpIylQhN3lj95hnPCbLN07BHUOYMoAQAqk1VkEs+k8tbzMIx4TZZ3kPKHRvAkuWGVWLjV0H7vEqOE2Wd1xxAMNtQgksWBVXZ1FGZFP7LFJ/yy6ZXHEAwoOym5VTmBJH7uXNYbs8c5E4GjcATDAlurEGpVSCDUUyLMI3Zg5yZo15GMB0c3MVigR1SZgCrv1UsECnVsy/tJ1LgKvACNwZpFlW9WRZbcG1mYNzwB9KWYx2xqHHT2llmNFo6oBNVSKUmTpm7IK0yki5ywmNGkmzFyqr0Cn0FdTLlsf+PCy/2k3jdoObIFVV63uqTBU8v2WDlWXvfxhEmYLtK7naWaCv/LjJt27kEEkzKpJYKh5FpMlu+YazsQe6xiREE+VvBSGZhojATZo/hlL+xkDtaHMBsx8QxAamU0ZwwmMvY00jIjfhlgkcxrFjsjZCzxVw3UexTqpbHiBLXeYczMPhGqlSlRQqKFUWCgUAHYBFc51sicY2Q9mbIkyBuKM3Fzdie0m/vifWCgRS2WggQIEABwUAjj4QcABQcFArAAZhjFYVJilZihlOoIqIegQAc/6Q9CXWszBsTS5lMf8Asbj3HzjHyMQwJExWzA0INqcwRrHbzGc6VdFkxS5l3Jw9Fxx/C/MduoiqUPYtjk9zADF0Wm6BzpeHcPtZhYXHb+UUGJlzZUxpU0FXU0It4EcxFls1e4mKqLbLqXMY68b/AFT5xJTvv9cvnDOCQnXy/SLOThhwhDGZR7fKHqfXGJKSIbeZLX0nUd5EAWNlT2wtTCfvcrga9oBPwhQxC8A5/lI+MAB0hQS/KCE0+zTvIHwrBtXgQPf+YgAPq4IrwP5wQQ8Sx8h+UH1tP8wAEAPZ90CCzNzH14QIQUWM88aE6jJQFjQUZQDrNVbFdHUA60MMlVdagkggEspJJy3SbLJuZiU43Kgg3Vor8zzbMN2g9M3Kj92z5OAsBPlmotmEXIBAHpVrcaNWvHh1laX0JpwmmOqcwgTQQ1ahaMHzD0UmMKLOUU/cTRZhoCYZEulAqUuyCWdKm83BueKsKtLPOLEpW4C8coNl361ltX/ac1p7DgiI8xgB6JYFSMp9N5aelLP/ADyjccwIAK/FuoU2LqUp+ObJQ1I7MRJPmBGG2XtLNjZoOWaxINQDMD2FJglVWWGIoSXNASbRrce7zJnVh6l6P1i0GagPVYuXUgBhTJMWo5niRnNnbLwMia7YgUnjKzCbeSrsdRKoA8hjatKrUcITJI1+GOffZ1WhCh3Imspb0AKDqZAJsCAYsdi7HlzZjOys2UkO8w5plaUeS4bTgwZKCh7opsLjROmLKlgFjuBTvZFa7SZv/UwxAJVxdY6FhsOstFlpXKoAFSSbWuTcwpyoIxsdMFBQdIzlwIMQIFIABSBSFQUABGCIgZhEbFY+VLFXmKvewEF0FEgmCrFJN6U4feylmAFaqtqUzEgtThFRjemLZC8tEUFsqM7G9jvMoFhYcdDWKpZ8ceWWLFN9jZZoGaOYptnF4icZazi2ayrKGUUqamo3gKUuWtXzu9qNisBLRqmfK3RMqxLSyWpXMxqUuLnlwrB53wDx1tZs80ETGZ2f0hV++LyRPzRanZBqil6Y9GlxUvMtpyA5G0r+BjyPujlMtmRirBlINGFbgjUGO7iOffaXsYKPvaClKCcBy0V/yPhFeSPcshLsUuzjX1nH85/KLyRIU6s39bfOMRgNqoD6carZ+OBAoQYpLS3TZ8r2Qe8sfjWJMqQi+iqjwEMJO+qQ91oPHyt8DAAs/X1eAaw057T5mEMR2ntgoB/Jx+vhAFTz9/50iJkB4nzMEJR5whksUren9v6wHZRqff8AIRDOEBN6fXdC0whGjU9/xhgPdan4ffAhr7seY8h8oOEA3gNp5swmbkyWT1hy0KmuXrwvBSaLNTS9dDU2eGxAaopQruMmoUha5PxIUuvtKaaqsVGLwwdw6N1cyWaBnvlqMolYkeshBIEy4IIB4UZwKzJTktugEI6saFErml3uKy3ujHdINMxtHWOYaR1F+OtybEECoc8bZaniuVxcGGMULEnNwLU9PcsJw/5ZWjD1loeMJwG0A9RZJgsUawVg1FrW5TOy5T7E8jhAnTFa6kgWII9JSu6r/wAafu3U6qAYAKXDJXELZbEzGCkhQzKaYmQR/tuNQNGpobxA6TbJk4tCpTMVqUdBMYoSLkCSmS/HM714kxbPhuqcuQqihyZpiS1QuB1iyusFQhYZqUYXtSMp0p2yqy2IaVNcnKi5sVNLOxooDMVQX5cojJolHkv/ALH+iP3brsTMJZiTKk1DKVRT+0OVwCpLCn8nbHSorejeC6jCyZNalJaqTxLUq7HtLEnxiyjOy4AhUFCRNBBZb0rWnMcO+ItpcgLgnmBRViAOZtGJm9Lp0ya8nDpWYpWijeJvvq5NlIuLVA5xA2hsnabEzjIWY2WgOdM68SFBstNCKXiqWb/irL44HzJpHQpOJR1LIQwBpXhXlXxEZ/pHjccoBwsuWykhSLmbnzZbKaLlrqam1TpeK3ott10VpM+SZZUuSHYiYanXK3C9AQaWjRYPbcqYpeVvqtQ1BvggK2VV10YE15jnFC6mM5OCe65QpY3HetirTYGMmpXE4mhN+rSuVbkgVBFbEDThGT250ZxUhDMJR5ag1Ki/oiubkaqBUefCNidoMxYq+pFL6WqONrU8YsJGKDoEmAGopUiouKMCONbiOPj8X6fNk0SuDfDe/wB/Y1S6fLBaufg5r0e2fOxYaarsEBq7E2qw9CWvG1+A1jQp0Wwdcil2NDXfAIoaUoFpSopQxfnCS8LJSRJWiSxlXia3JYk6mpN+2KjZ/WD0mzGpJIrUgE0pS9PhcdsYOt8TyPJJYZUouv8AL7/Q1YIy0Xx/O5kMbipuyp0ufKHWS3DAkggstRmlGvoOMqkEUr8GumvT/wC+r1GDJEsgdYxFGNaVSjCgF6HuMK+0+V1aYeU+UzHMyYaVJpSjMSb0Lu1P4fCMdsCXQzTckacb1pT65R6WEm8cdXNIxuKlU/lm12JMJC0P0I6JsyuUVjm3RgVy00rTnxjqWDl0AjZj4M2TkmqYZxuHWYjI4qrAqw4EEUIh5RBkRYVHnPbWyGwuImST6rbp5qbqfKkObPnNLIobH6Ebb7Ydl3lYlRzlv/3IT/cPGOfShbXTs5RkktMqNUXaOjbDxWcX1+u2LyWo53jDdG3v+kbGRXXLU+AgoCYEhJGsIE1qUye8QYJp6PvEFDAE5tBlTzhIDch5/pBGSSak/XiIKCwZfxQRXtg2w5p6bDy/8YC4WlN5jzqfkIKCxHj7oEL+6/jb68IEFBZjtkbbaqqu9qECcz6Sys1lPtSH3TwIjSYTaFVDMbL6MytMmaoyr1mgrUNJmGnskxGn4MqQlCM2ikJmbuApJxa9u6/bFdjMRkGYnSoDAsSLVZVZt9TqeonZlYA5TpHUOdpJ/wB6WZOGHWUQMjmYy5gsnhRSQDJzVO41U0IqLi9RBKQDN7J6x2VS5WgBLkEsaAXQObWYaRkPs+ngynnkIoZzlJIVVC2UK0ytKcFloSNMw0jVTDSswErXVxSSG/8AyJ9Zr/ygQrBrcj4l2G+quBrnTDqAba9fiyWPfSMHs6a+O2xIlM0xpcli7CZNEy6CpIyAIBmyrbkbxY9MtqS1QsokTG9FWAmzWBpqZk6iCmuh7ojfYdgwcXiJltyUFFL3mPc1Op/Z6xVN9iyKrc7fK0h0Q0kOrFZIRiGoOFSQBXSpIC8DxpwhiRg3ls7E5g5TdWu4aBTQE0y8a2OsHtSUWltl9IUZRzKnMB5iOd7f6U49juzBKUNQqigkgC5ZjUjUU00OsZ80kn6i6GNyVo2uyNlJhUeaiftZrlpjcTU7q/w04cyTqYgbY21Mw7h2b9k3kCSKV7yR74V0P2v1+HEmY2adLBFW9YA7r11JpY93bCNubO6yW0p6G1DXnQFSR5GPNeLTy4p4pxk9FVtap/TudHp8aU5QyJX8/gsto4GTtHDmVMFCbqymjA8HQjv+Iig+zHZ8zCri8HNKtMlzBMqCbpMTKpNbgkymtFf0e20qMJTv1bLu5c1CL3vEbpzj8RgcRJxctqs4MtkJH7WWGD5CaWILHKeHbWh39H1Es0XDNdr/AHe6fD+/Jn6nGsUqjw/wzT9SqKxYaVanjRaW7NO2Hujikhmeg3ixqNKjQ18/OKTCdPtnzpYeaJssgiqshN6VsUqG4/KMx0v+0ATpTYfDI0tGtMmNZnB1VBqARYsacRQRg6PwiePPqyyTine291wq7fP2L5dQ8kNEVu/wdBlbYlYpBNknMjVGbUZlJUqeR43pUMKVhA6rCypmJxLEDlW7H1VRa2PADW1TpHDcBj8TLfNgZ7SzTfytumnChNGoALkHWLHGbexUyWWmu7zVzLvGoU19JAKDsNgaiNq8MwY8zzpW270vi/f/ABe9GbLmlCOhce43t7ac3EYl589aTHAWXLr6KD0EHcDc8yTFtgNkNKQVvTecjQseHgbRT7DU0ExwesOlaVrW7U1/zG46PbHmOazKhLEKfz+MdSEW3vyPJl9KXFFh0T2RTfYUqSQO03jcSREbCyKCJiCNcVSMcnbHBBmCEKiREznTvBdbgp4pdVzjvTe+AMcWwpGnOPQmMkhkZToykeYpHnrD4OjUroaeVoy9Qt7NGHguNgsQ9K6Gkb3CliBvRz/IZRD6g662MbLZGPDKNPrvMRjK1ZNqi7CfV4VQwxLm9vwhzMe3zP6RIQOr+r/GEtJH0T84B0+vzMA0+v0EABZbAVB8YdEvmRBK3f74HgfrvMIA+rPD4fpAhJmDkPNfnAgGQdq4MBWKgBK7+VS8nvnYc78hvxpSkYPpbiTkK11AFS4fcNxSaf3srdqrNvKUodY6dIno9CCGIFmluMyipFnTQdjgC4pluYwu39jETzvA5iWAAyPUgZj1Yoamg9A0sTW5EdSa2MKJXQ1eqwyFQw3bzFVJKnjT7xO3j3IoHKLxDUGatxr1ktDNJ78RiaL/AECKvZcgIRugMBStEz9l5nWzB4CKnpvtZSgQGUzNZncTndRSwXraBmPJVHhCeyElbMX0m2ocTOLFnZRUJ1r9YTe5RVFDWgvpYa6xvfsLl3xpNa/+nF9f93UCw7o5pOBViDUH1qmh7OtYXBPsCOl/YY9Gxi/hksBpYGYLLqBca3jOWnW0hxYbSHFgEKEY3pl0bLK82UL0OZR7yBS45iNkIWIryY1NUycJuDtHFdj7YEt0KVV114gUtRuwj/MdOwc6XiZZmySCbZ5dbqeI+J7YlYLYGHlPMeXLCtMOZuVTrQHQdghnpBh2WUZklSZqUK5LMRW6/iFOEYM/QRyYZQnuvzfuvk2y6vW1tTXD+PZmaxnRbrcTnZRlIGawrUW3gadl76cIyv2j9JZTzupRBMWQrBirbomGmZQ3AKFQEjjXlE7HbWxeKzSJXWhyoU26uvB2cgChNDaw7Im7H+z8pLAfJXLQm7HQW4DhGfoullHp9Et3339uK/7K889UrZG+zTY8vEYd3my1OZgTrRqDUeLa0GbW96v/AGidHZUvAzDLkJnzygrKgzAZlzbxBIFiI0uC6P8AVrlE1wNTlovw7oRjfu0oUmzK9jMXbvy3PujdDp9O/BljszjOydlO244mKxpcABsvBagWFq+PGLCbsSY+IUJLm0AFahsthQEsQLnjHV9mzcPNDNL9FNXKlVDHRbgEnSw5jmIq+kHSyXhN1pLkn0DqjcPSWtD2ECJOEbtsuU+yRP2FshRLTOozDSo0NKW5Ghi8EkDSMfsjpXiMS2SRhhm1qz7qj2nIFh5xZbSwG0WTcxsiW50AkkjStMzNXxyxb5sFG72+37IyxyTpmgUiHVYRwzpljdqScoOJmZrVEt91wTTPKKgWBsRYi1rxJ6LdOcXLmpIxTZww3JhpmzC+Uka24kVqONYMeeE1aZXW9HbgYXFNsraqzVBB/wAxao8XJ2INo8+zv30wX/eP/wBxj0BMagrHAZU3NMZubMfMkxm6nhF+DuXMmXVaFSQdYLCJMktVRVeVqxJkuaCkKbNzjBGcovY1OKaLbCbcWm8GB5X/ACiYdsSranw+cZwEwqpi3zmQ8tF3N2yo0Bp2AD8oizNvfhPiT+UVtDz98IMuvGE8sh6ETW2xMPqr41iBP2rOqACov7MImy6igNzQDxiBMmykmLJLnrG0Gte33GHHzJ8ClpjyWn+qT/bHlAiK2UGh1gQvWh+k20oOxBrMcjifu8494KlW8iIk4iTnUIyvT2Hk5we6XOGv8Dk8aamK2bgjW8tjxLNgUIH80hhUwMOQCbS1HamKlA6njVSOwikd6zlWZrpFtTqKypKyw1KsUOIkiWNQ8xWOQacNeUZOjsc9XZn9c/vZg4lS37mV+LWN7j+j6z3aarS5lTZDNMxFP/UK3mTmpYKQAO2M1tTZ7ISrKTmuwmGjvT18RQ/sZQ4JqbRVNPksi0ZzHyNwFaUBoCvog8RLJvNmc20Eaz7FMTlxzy9BMlOOzOjK9Km7tQPU6CKQDMKXYkGhp+0Zfwj0cPJ7daQfQWf1O08O1qBiKi4ykEME5KATfiYqk63JVex6HWHBBFaGDgEKhawiDBgAchDsBqaRkdvdKiCUkUt650N709odxis2dsDGYn9q05grUILaduROI7/Axn/1CbqKs0x6aTjqk0l8mo2ptuTKVmsSNbhQSOGY6nurCejG1GxcrrSuRLgC9zcUqwBNOdBfSMXtbodvMExXWON5hlIvUgVOanBrdkObG6YNg1GFxKZgMwkTpW8j3J6t/ZfW+hoeV6F1cXOULVrlEZwio2nf4E9PujONmOgwrNNztcO5KyhS7Gpoq+/lyitkfZrjMoDYlFNa0BZgacxQWqfhHQ8PtR/uPW0HWsGNOAe9FPGgoBztFWyhZKM5LMd414sb1pwFbgCOf13iEOlcFWq9+f7L+nxSyK1+h2d0akthUw9SMg9IEpV2O/M0N7NQEHWnbHPOnarhQcOGzznOZ2zE0lWoKeqxIp3A6VjVYXbMxhnLUAcNe+7XKR4hveIweO6PT5r4ieis6TJlV3g0wo1za9VB3OduyLMfX4ckbfpfFNjWBwyerfubzoMPu+BkvQGZOfeNKsQzlEpeyhBU8L8zFpLmt1syh3dRTS9qedTEXoystsHJWYgWbKNBmFGU1qpof4vMERD28swuJWmZwWI5ZlqO4xyfGJrNkhjT9Om//TT0aTlNvd2RumWHE/DossqWWajLXUyyxSZQ8jXzAitwGxc7pIdgMtSooMy3sbak3t2GLTp1hwmz5zCgZFRVbRlJmIRlPgPoRTdDvtAaZhjLZK4haBZgAymtd9/xC57THT8NxKfTQb+a+7MPVY08rZd4NWw01pRYHKdR2it+RveNns6cSoMZXYuyGO81ybkniTqTGwwsnKKR24KkUSoi9IsX1WGnTPZlufHKae+kcM2fqI6h9qOOyYUSgbzWA/lXePwA8Y59sqRGbqZbl+FbFvhlsDeH8naYdkJaEYnEIg3j3Die6MS34NIgqISaQrCh5h3UIHMmLBdlPxp74uWKRDWisYwWYRaf6M/L3wG2Q49UQeXINSKzrB8jxiAcCpmrOI31sGv8PGL7/Tm9n4Qg4N/Z+HziUdcOEKSjLkrGStzrAif9zf2DAhNTe4/SX2KwYAqyIK+s0mfL/ukMVPhDmz5qioSYo0smKmIewUnikPNIYAsFYccwVkH/AOzCMVPikRUxbaGYwB9ueHHliJItbnHbOQPYpGI3g7fx4eXPH9co5uUU3SWSWldWJdgc1kxISo0LS5lJfm1OyGcY8t31lGmtsHqCB6qPxHKFYmSTcS83LKgNB3pg7X7RCGjFzZVASd4E3q2YO3Oc6WcjhKSo5wrYUgHGSGuf2lGPblIoxG6KaBFrTjE3aGGLuVAJPECsx6cR6bEL2Ey15gw/sOSBisOBQlWBNCHYKLMSw3Jajkg1tWM+SPpZojLdHadmzw8oEGpXdPhp7qRIEU2zcQEmUNlaxtx4H65xdstIpwZNcPlEssNMgogdIJhXCz2GolOa1ApRTU1PZWJ8JnSwwKm4III7DYiLZK1RBOnZzHo7IXE4lJYNVJzOezeZ1tzK69oMdF2vOKEBTQAWA4cPhHPujWzBs7aLBiRKZqISbZWUgEHkKrXuMdC2hhKg0Fbk3N68AK6kmvERxOuwZcvTSjgfqtd6dI6LyKMoauK/N/0ZnaExwrsDUkamhqaUA7L0jJbM2IXluztll72epNmpXMCRTKL+UbbGYdwSBlApWrnKCMwDc6WqRWlfOlftCcmCwk2a5VpgzrLBHpsxORFFScoIv2AmMHQ+G9UlPzPTffZ/p7/Uh1WTDNx07/HA7sFZbYYDMJySnZAoNQX1NBWhXetW9qQztjEk0twsB3WA84pPso2jiZUlZc2SxwhNJc0JZGBOYtlGahJoWNhQVIEbfaGFUUYoTW9FpaptUE21ue+NPX+H5MuODxq3Hle/a/x9OwdNmhhk0+OxjsDh8krqbBmVizUoBzNK1rwH6RkZe1JkvFN1atmRJakalh6V155mNO2tuEbnpS8rCSySWzTGzLKSgmNMqaDX0CSASPO8Q/su2P1gxWInkPOmOqzagEAgZ6LThSYvbS0Lpugkoz83mXbn7/r6FfU5nNpw7Gd2b0qdcWZkpC7zDR0NASNNPVpXWnZ2RrpvSfATT+0miW5AFGBJy30yggnXjEPpvsrqZM2caZFWy1YKzlsq8TSpYCnZHHUctPq5G8tuwjQAnxjS+ihkioZI7R43/XH2IYck1K1t9TonTvazY3/0+EzNLG8zEFVdqUQCvAC+mpHKFfZ/0JnSgTOoCWrQXsNPzgfZ3hS2TNwr40NBrHWsPIAEdHpsEMWNQjwhZJtu2FhJAUUiQTB0jO9ONvjCYZnB/aNuyh+I8e4a+EaW6VlSVs530+24J2MZVukrcH8Wrnzt/LDGzsRQej7/ANIzeEkljUkkm5NdSdTF/hsKtLg+cc3K9TNsFSJ2J2oEWoAroBXjD2wtnGa3WTDU+Foo8TIYzVVKCntczG12TIxSqtGkU73/ACMWYoJKyM5Wy6w+GCilPdEgSu/yMQkl4m9Xk9lnt/deFHCTG9Kd/QtB41rWLisddlGrqvOpA+MMHGydFmKx5VEPSMEF7TzK1/SJC1H/AMVHxgAYWZmFqeJIhMxG4Ff7j8IlM7fRA+EJoeZ82+UAEPqpnNP6Wgol9X3/AN3zgQbgVRVAWNQpABbLMyUB0LZpcthWvFuUKbGuuYCbOGVcxGetFOjMeue3I0vFh905c+trMqb/AP1OJ5m+5L7oTi5ktFau6o/aM0z/APvia6mvoy71t3R0TnlNidsMtSzTwAmdiWYBUPolxmUqTwGpqIza7e640WTmJ4zC7f2tMce6Ie2dpNjHySw4khywrd5jnWbNpx1oNFEarox0eKgHf8v0jPPK79Jojj23Ix2FNnSsjszLWvVoMgblLAUKqgnVtaCHsH0eEpgwuQ1T6quZZqzk+rh5dKAes0beRg6D1vEn5wMTg1IPo1oLHRstSiNxyZiCRxpBDJ2kEod4kR2zCsXex8bnXI3prp+JfmIz8xKKBWhFjQG5FqiG+uKkFWII0PbHGhm8qZ0J49cTZUgRD2XtJZwpo4G8vP8AEteHwiZHWjJSVowSi4umZ7prsRsVhmWUQJygtJY23/ZJ9k6Hhpyik2HtLacpBLxGFzhQN0kGlDbI61DAUrcVFB2RuzBFYjLGm7WzLIZnFaWrXszI4ramIO8MCTMpTM8xQADXgoJI7DyEYrbuzsXiaTcScoVt3UBFbVVl036mmtza9o7AZQjA9PMFtGdOlJh5KtIBuwdb1pUuGpSlKUAOvbanPjyUnB/j+ieOcLqkv58mx2Hs77thpMniiKGA0Lm7n+omOLdLOlGKOPxAkzpiSg2RFR2FerGVqKPxBzXtjeYXZG0ZeULPZEAAK5s1ABXdzA3qTcgnyhjBdAJSvnK1JuakmprWtK090OOp8KiFRi93ZhNkSmmTEmTc08qavmJLsANGY1IpbUxtujm2sTLDLJwqKhfNQ5lqSADenZrSNTgdgS5YoqgDWgFBXnQRZysEo4RH/SJz8xvf+fQbyqqozvSTCNtDCnDurSwzKXIIJopDAKSOYHCKbD/ZphAVJlkleJZ6nvveOhrKELyRqUUVavYpdlbDlSVVZagBRQd3ebmLelIWREXG4tJas7sFVRViTQADiYfAuROOxaSkaY7BVUEsToAI4d0l2y2OxBmGolruyl5LxJ7Tr5comdNOlb45+rlVXDqbcDMI0ZuzkPHugYHDADTxjLmy3sjRjhW4/g8CAIkvJ7YNfq8IedQGtYyW7NAjYYBnX4Hs/OOj4WYAooR/Uo+AjBdFJS5szFfExuZeLkqPSXw/SNiKGSzO/EP6q/CGzOHtDyJ/OEDaEs6GvcDCWx68FY+EMB3rBz/tg8w5v4L+kRzi2Okp/GwgGdO4Io7zAA68ynqzDEOdiCLlPMtWHmecfWUecJExxrNHgtYAGhiU9lf6jAhwlOLmvcPlAhDJeMxqS0Z5hCBSGbPvZX4NOp+8nH1ZQ0jn+1NpvjnyKCkgGqqxqzt/1Jres3ZoNBzhue83GMubIstCerlKSESup0qWPFjUmNd0f6PIlKle7M0aZ5NWy4M0MendiOjfRhFAJqD2NSNlh8DSl28/0g8NhUAoCvmfnEgSRw9x+cQJth/dVAqQT4kwSAE2oo98LVWGhPl8oS4Nbgd9KQCM5t6UZbmtcj3U8A3rKSdDxHf2RSz57VsL86D8zeNzMkqwKsKg6gmoPgYpsR0YkNpnHjUe+MmTp7dovhlpUzLptB0IIYKwuCCK27o12xelkqZRJrKky1GqArf+J7P8RUYnowEBKGpANilyaAKvidTyioxeyZg1WUb+lRgAq7ruaXC5t1eLHgIniw5Y7xI5MmOWzOoQI59s/bOLw26wDIDeWcxYV9CWp1ExhfIK0FzSNVs7pHIm0BPVuSRlYimYCrhXFmy8SNI2KMq3RmbV7Mt4IiADW4uOBGkCAAisAJBwqABISDywcAmAAqQRMRsdtGVKFZjqveb+A1MY/bHTRzVcLLP/ANx1NPBfnCbSJKLZoekPSCRhJfWT3Cj1V1ZjyVdSY4r0q6XT8e1LpIBqssHWmjTDxPZoPfFzO2ZMnv1k453PFhU9w5DsEWeG6PjjL/tEUzk3sWxikYbBCl7+XHgIsZc99ADG7k7ITig/oiamzpfsL/R+sUvHZbrOfyxMPqkxJl7HnTLFTQ62Mb5ZCjRQPBR8YWO/3/IQ1jig1NlNsbYglKKSqnmRF2JL09FR7oO9v1hDKezy+cTIh9VzdB2AVgGUOMxu4LCDmHE+4flCak8fefnBYC2VOcyGz1fJvEwOr7veYQ1BrTyHygsBavKHq+ZgGbL4IviYZzD2vcIM/wARp2Qtxi/vY9lff8oENg9jHwPygQATNnbEKAa+X/si8kSGHPy/9sSWTs90BR3eUXFFgAI5/XhB1P1/mDH1aBWGII05Qgn6qflDsEe4QhjRPh4j84L64Q5CTAA1b6r+RhibhgTmAGaxqa6qGyVtcAsTTnD7TIAYHSkCdcA1ZRYzABRUg0AItYkGlQp4TJsxgCeQisxOzAag5eIbghyemPw4eWbUHptrGummnARWzMONQBbLunQhCzqt+BdgT3RfHMu5TLE+xmZAnSyckyYvP2hmFELILGawpklUoouYjbU6f4mTNEmXkmsv70sKqh4SwyUzOPWOlTYWiZ0lmTkTLIVjPclUIFgSFbEYknTMS4UHgBaMZgNhTlNGQ61JubnWDLNVSHjg3uzoWyOmU6aN6Sg7mYe4rFz/AK5Mp+5H9X6RmdlSCoAJp5A+8RbiW3A176fGkZtbL9CJE7bU+m6qDzP5xW4jE4qZWs0gclGX3i8SJmf2fKh/OAFanony+RhamPSinXY4NyxPaaknxKmJEnYqA8Pr+WHp0ta6lTxrW/nDDYbWhrXw92kKyVExcIg9nzHlDiykBpa/8PzirGFam7Y1rpWJGHkUOYlc3lX84LCixUJWguR9XgOy8aDvtDclWpZU17vy1gpq5hR1y9uvwgsKFHEoLWr5iGm2lK9o+A/WI2Iw3EUPaLj9IgzcFWp8/mDpAOie+3ZGbKGavC1Pyhf+qSuPv/xFIcECwqBXui06qq0ty0H6wBQ8u0JZ5fXjC5WMl8AIiphAFso8j8oWMOBwHgT84QbEvrl4e4GGp9WWq27xX3AQ390HaP5hDiYcC1T5wAV+Hxj7ylXFNLUHjEp5jkWr3/pW8P8AUJXifruhE+UlqW8R8oA2Kv8A1Gb7LQIsgi9v14QIBm2qohJnrAgRZZTQh559k+YhBxJHq/CBAhBQPvf4T7vnDZxg7frxgQIB0A40DUGEnHLygQILHQg4qWeHuhQVeFR9dsCBCsGgiDwbzFYSwY8FPgYECGIadeaeRiM+G7GH9J+MCBDoLGmIBv7x8ocVF7PAmBAiBPsKMns/uPyhJkjWjf1QIEAht1HM9xv8IaOGBFqfXugQIQwFABUkjvv5UhIHIgj67IECAEGbdn12GFiY1Na+PzBgQIQxBm8x4i0NsoP+Ke8EQIECYxC4YcKXtX6Ah0SbHj4fMwIEMQ0ZYFq+79IMr2/XlAgQgEsa+t7z8oBNPW+MCBAMaZqaH4wmbe/AaXMFAgBCqfVTAgQIBn//2Q==',
    price: 2.1,
    information:
      'An average-sized egg contains about 6–7 grams of protein. To enable your body to use as much of that as possible, it is recommended to eat eggs cooked rather than raw',
    calories: '17',
    nutrients: [
      'Fat 11 g',
      'Cholesterol 373 mg',
      'Protein 13 g',
      'Sodium 124 mg',
      'Potassium 126 mg',
      'Fat 11 g',
      'Total Carbohydrate 1.1 g',
      'Cholesterol 373 mg',
      'Protein 13 g',
      'Sodium 124 mg',
      'Potassium 126 mg',
      'Total Carbohydrate 1.1 g',
    ],
  },

  {
    id: 2,
    itemName: 'Banana Bread',
    url:
      'https://twohealthykitchens.com/wp-content/uploads/2019/02/Healthy-Whole-Wheat-Banana-Bread-Recipe-horiz.jpg',
    price: 8.3,
    information:
      'This Healthy Whole Wheat Banana Bread is loaded with wonderful flavors! So rich and moist – no one will ever even guess that it’s healthy! Great for breakfasts or snacks and absolutely delicious toasted',
    calories: '17',
    nutrients: [
      'Total Carbohydrate 55 g',
      'Cholesterol 373 mg',
      'Sodium 124 mg',
      'Fat 11 g',
      'Potassium 126 mg',
      'Dietary fiber 1.1 g',
      'Potassium 134 mg',
    ],
  },

  {
    id: 3,
    itemName: 'Oat Meal',
    url:
      'https://fitfoodiefinds.com/wp-content/uploads/2019/08/basic-oatmeal.jpg',
    price: 6.9,
    information:
      'This Healthy Whole Wheat Banana Bread is loaded with wonderful flavors! So rich and moist – no one will ever even guess that it’s healthy! Great for breakfasts or snacks and absolutely delicious toasted',
    calories: '237',
    nutrients: [
      'Fat 11 g',
      'Cholesterol 373 mg',
      'Sodium 124 mg',
      'Potassium 126 mg',
      'Total Carbohydrate 1.1 g',
      'Protein 13 g',
    ],
  },

  {
    id: 10,
    itemName: 'Zucchini Noodles',
    url: 'http://images.media-allrecipes.com/images/74681.jpg',
    price: 6.9,
    information:
      'Avocado makes the pesto sauce in this healthy zoodle recipe extra creamy. Topped with zesty shrimp this easy dinner recipe comes together in a flash.',
    calories: '237',
    nutrients: [
      'Fat 11 g',
      'Cholesterol 373 mg',
      'Sodium 124 mg',
      'Potassium 126 mg',
      'Total Carbohydrate 1.1 g',
      'Protein 13 g',
    ],
  },

  {
    id: 4,
    itemName: 'Granular Bars',
    url:
      'https://i2.wp.com/www.foodfaithfitness.com/wp-content/uploads/2018/08/sugar-free-keto-low-carb-granola-bars-photograph.jpg',
    price: 4.1,
    information:
      'A simple, soft and chewy granola bars recipe that’s delicious as-is or can be adapted based on your favorite dried fruits, nuts or chocolate',
    calories: '560',
    nutrients: [
      'Fat 11 g',
      'Cholesterol 373 mg',
      'Sodium 124 mg',
      'Potassium 126 mg',
      'Total Carbohydrate 1.1 g',
      'Protein 13 g',
    ],
  },
  {
    id: 5,
    itemName: 'Avacado Toast',
    url:
      'https://www.spendwithpennies.com/wp-content/uploads/2018/06/Avocado-Toast_8.jpg',
    price: 6.59,
    information:
      'Mashed avocado spread over crusty whole-wheat bread, finished with olive oil, red pepper flakes, and flaky sea salt—does it get much better than that?  It’s full of healthy, unsaturated fats, packed with fiber, and it’s an effortless breakfast or snack.',
    calories: '960',
    nutrients: [
      'Fat 11 g',
      'Cholesterol 373 mg',
      'Sodium 124 mg',
      'Potassium 126 mg',
      'Total Carbohydrate 1.1 g',
      'Protein 13 g',
    ],
  },
  {
    id: 6,
    itemName: 'Salad',
    url:
      'https://www.thehealthy.com/wp-content/uploads/2019/05/vegetarian-buddha-bowl-800x450.jpg',
    information:
      'A mix of cool, crunchy vegetables gives this healthy salad satisfying bite for a perfect potluck side.',
    price: 8.99,
    calories: '680',
    nutrients: [
      'Fat 11 g',
      'Cholesterol 373 mg',
      'Sodium 124 mg',
      'Potassium 126 mg',
      'Total Carbohydrate 1.1 g',
      'Protein 13 g',
    ],
  },
  {
    id: 7,
    itemName: 'Veggie Wrap',
    url:
      'https://createmindfully.com/wp-content/uploads/2019/02/vegan-veggie-wrap-close-up.jpg',
    price: 5.69,
    calories: '360',
    information:
      'The Ultimate Veggie Wrap has herbed cream cheese, Havarti, and lots of fresh vegetables! Best of all, make it ahead for an easy lunch optin',
    nutrients: [
      'Fat 11 g',
      'Cholesterol 373 mg',
      'Sodium 124 mg',
      'Potassium 126 mg',
      'Total Carbohydrate 1.1 g',
      'Protein 13 g',
    ],
  },
  {
    id: 8,
    itemName: 'Chicken Salad',
    url: 'https://greatist.com/sites/default/files/Fall%20Salads.jpg',
    information:
      'Classic Chicken Salad is the PERFECT combo of seasoned chicken breast, creamy mayonnaise, lemon juice and crunchy celery, ready in just minutes!',
    price: 8.99,
    calories: '990',
    nutrients: [
      'Fat 11 g',
      'Cholesterol 373 mg',
      'Sodium 124 mg',
      'Potassium 126 mg',
      'Total Carbohydrate 1.1 g',
      'Protein 13 g',
    ],
  },
  {
    id: 9,
    itemName: 'Juice',
    url:
      'https://www.thehealthy.com/wp-content/uploads/2016/06/01-soda-alternatives-orange-juice.jpg',
    information:
      'Orange juice is a liquid extract of the orange tree fruit, produced by squeezing or reaming oranges. It comes in several different varieties, including blood orange, navel oranges, valencia orange, clementine, and tangerine',
    price: 8.99,
    calories: '320',
    nutrients: [
      'Fat 11 g',
      'Cholesterol 373 mg',
      'Sodium 124 mg',
      'Potassium 126 mg',
      'Total Carbohydrate 1.1 g',
      'Protein 13 g',
    ],
  },
];

export default helathyItems;

/* format
    {
        id: ,
        itemName:,
        url:,
        information::
        price:,
        calories:'',

    },


*/
