import React from 'react';

import s from "./Footer.module.css"
import Logo from "../../shared/ui/Logo/Logo";

const Footer: React.FC = () => {
    return (
        <div className={s.footer}>
            <div>
                <Logo />
            </div>
            <div>
                <ul>
                    <li>Чат поддержки</li>
                    <li>Юридический адрес</li>
                    <li>© ООО «Название»</li>
                </ul>
            </div>
            <div>
                <ul>
                    <li>Главная</li>
                    <li>Публикация</li>
                    <li>FAQ</li>
                </ul>
            </div>
            <div>
                <div>
                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <rect width="36" height="36" fill="url(#pattern0)"/>
                        <defs>
                            <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                                <use xlink:href="#image0_538_405" transform="scale(0.02)"/>
                            </pattern>
                            <image id="image0_538_405" width="50" height="50" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFF0lEQVR4nO2aW4hVVRjHf6eOzpSSzThqF4s0CqKo6K2k6CUbK22MKDSjhwqLSG2KiKIL3R6mnoQhn4KgtyLoYmZZNtDFrEzp4r0iazC60KCN1uQ58dF/wdd2X8+cW+EfNpy91rfX/tZa3+X/rX3gCP6/6Ab6gKeA1cA24FfgD132e6v6TOZqoIs2QSdwI/AmcAioFrz+AtYCS4COVkzgGOBuYNgpdRB4B3hQO3OWVnyCri61Wd9DwHo9E57/AejX4jQFVwK7nQIfA7cAU2oY63jgVuATN94uYB4NhK3UKvfCT4G5dRy/F/jMjT/YiN05QYrbC34H7gSOrvdL+GfM5cCo2+0Z9Rp8lra7qqhzDo3HucB2vXOndBgXprkBNwI9NA9dwHt6925ZRU3odOb0ATCJ5mMSsMGZWU0+s8qZkyW7VmGqswoLAIVDbHDsZvhEHp8ZlU4W3XInu5AnLDq1C1Y4589lYve4PNGIEFsrysBm6WaTSkWHqIIJX0b74QrpNpy1K0tchGhHlFwkXZwm+JaEjDu1K5ZKxzVJAt2i1QdjCKAx2gMxNNxqjgslYwz3fq3Yb+r/U2bwIjA7MuYpwNuqVaLj/qSxkhKlPTOWRFT7NIhR8Sj2p9QU32jLV2bUHpbYPJ7LkB8DjkqYzLuSWRDX+bQ6bfWjWK2+J1ybRbRv1X4xcJd21O5fUFa260ygoisodiwworYoj5rjaEkSHpHMACnKWgkaxVz1jUTK0yfVbqZjuED3P0aer6g9RJo7dP9hzLteVp+NnYSFknk1rnOHOq2Ki8NG9T/s2k6U79hOnKEVr6jsLcVMpKwrsOmbIu/olew+YHrKRM52PnoYflancZs4LFC/HSIc59qfUfs6KR+cd0LMRKz/UZehvYwx6+/VZ0k5DT0uKByGoMDEhIdLyi8m81iE6u91NlsRLyrFjH29ds+uS1x/WRGsCgylOLlP3OGcoPBEDBdJUTOn0137VYoyIeKYGXp8rvZKQkAJgWYYOCljEpkTyTKtgOcTHK1PdPtLRZ6oc44ojEd50hxN0HJO9LmaTCvL2QNOljOa7LXkRzniEwGPa6xnC4yV6uyvpYTfKEL4/AU4lfFhvmMBi3M+E8LvK3GdwU7t8CwLJZd3jFpPZnwICe4QcHMB+YE0imIngHnQpTI4JLaejArPHH4P8EBCQLnXBYSsgm5IsvOTFAuk0U4A82C2qyZ3KKrFYV2ER30EzEww2Yqu61LIbSCNPp/9C2v1IjvGzIvp2pGwmi9JiZlu5UNEtKT6tX7vVbCIHl4vdwkzDrep//U0pW6QkJ3FFoFxqPsUYpPY7H4lOlvRNzKYb1WENM43N6l/UZZCodS9nOKwLH+7Vus7l2T36fTeM2fzgy8UraKT2AxcmnK6syfPZ4h+CW9qw8OHLdJtWZ4HOh07NXttF/RLp+1FPgrN00OjCp2txvmu1C78KWPQrUAW/2okpimCVVVOF0ano+0bWnSIPVk5J+SejvGsxjZHze2+WegG3te7d9Xjg88st7VmZufRHJ/Y6RjDafUaeIYzs1HVFBYO642yotMBZ05ptTu1+sxgJGnV6+trScluixt/ZaO/vfe6ba/qZHFpjf9i6BZ3CrSjKlOq59fizN1Z4U49qqIjQzouWqgqbqqI40T9to9G10hmKHJcarRjWav+AdGhqm6NO2Usco2pQFvUqgnEYYoKnQEdTGwVfQ9/qrHfX6k8HZBsYj1xBPzH8TeKE+RDFn1XqgAAAABJRU5ErkJggg=="/>
                        </defs>
                    </svg>

                </div>
                <div>
                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <rect width="36" height="36" fill="url(#pattern0)"/>
                        <defs>
                            <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                                <use xlink:href="#image0_538_406" transform="scale(0.02)"/>
                            </pattern>
                            <image id="image0_538_406" width="50" height="50" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADK0lEQVR4nO2ZO09UQRTHfwUqRB67lksrgrEQBTsfsZOYqHwCQlS+gApS+2iNhFKDX0AxsZLFZ6f2Itio2AoKCBWuOcn/JhMDu3Mfu3NN9p9McrP3nHPn7Jz3QBNN5AK9wAQwDywAG0Alo2WyTGYZGAcO1UOBQeBFhpv2XfPAQBYK7AGmgT8S/AN4AFzQ6ewnO5gsk3kReKhvVfTtKaAlqeAi8FLCfgO3gE4ah07gNrDpnE4hyUlEpvRdphUKR4Ev2ssbYG8c5mkxfgNKhEcJWNae7vsyDcouzZyOkR8cl5lt67kmIpMyn8gb7mhvFqKroteJTo107Ajn5ZNmRkM7vO8CVrTHnmqCJkRk4S8Elp0cYv65E2b0/kY1QWURWSzPqyLDej9XTdCiiNKUB5Z/RoGnwCeVHht6ntU7o9kJQ1LGlDhXw/xN3q5YE1FHAgXagEngp0fpsQrcBFoTfKdDMmyvuyL6UJI4/8Hhfw5cccoYW336bc6he58wT1Vq7TOJIiWZQnTcJz14TjlmnCTpVrJWpM05iVcxayHzk9fifRfTzCpZKzIp+oUkBZ2UiU7GQn8QRYqOY/uY02444wSAYghFRh3HTosof42EUGRWtJdJj6uS9TiEIpFtW4hNiz6fJFcvRdZF2056tEvW+v+uSKdk/fKkb5pWNWe3siMtxkI6+6hPOe2J+ZDht6gkZvSnSY6zTkIshC5RFmNkZRfGs+TT8dVbkVaV4hUVgHGUOQC8zUvR+G8Zv6TaycecPuepjI9Q0r8a8ZcViQ4rz7Trecxx7Ogk6tJYraVodVtViq96trp2dbCvXq3uYgbDh4LC6BP1KetaC/ptJGHvEmv4EHoc5INhn/ZhPPCAzgePtMdreR6Z1oL3yBQnqtglS95wN05XOqBrhU3f8X2DMAhs6Vqh35dpSprb+LKb8Oh25sL34jC2OCZmY/4ThEM/8NVJtLEvRQuOMpu6ZDFnaxS65BNbTruQOP+06M5uW8JWdD9xSQODLNrcCCarT3lixolO2zKnxNfTLo4AzzxKj6xXuV4Bp0d9w5xTfmS1aZP1UaH1OnCwHgo00QTx8Bf0wax6bwlEYQAAAABJRU5ErkJggg=="/>
                        </defs>
                    </svg>

                </div>
                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <rect width="36" height="36" fill="url(#pattern0)"/>
                        <defs>
                            <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                                <use xlink:href="#image0_538_407" transform="scale(0.02)"/>
                            </pattern>
                            <image id="image0_538_407" width="50" height="50" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFDklEQVR4nO2aa4hVVRTHfz7nqpHeUTMMIwuEMmqIIAsqMijtQWoEWhb0ognKZIroQ+8iYgoKaUD60qeeRlCNifYULDIbS7FsmqSgVLKXRI1OmjcW/Q8szpzHPvdp4R8O3Dl77bXXPmfttf5rnYEj+P+iHVgAPAGsBr4CfgWGdNnv7RozmSuAMocJSsC1wDrgb6BS8DoIrAWWAm2t2MA44E5glzNqP/AecJ/ezMl64mN0lXXPxu4H3tecaP5OoEsPpym4FNjhDNgE3ARMrELXJOBm4FOn7xtgPg2EPamVbsE+4KI66p8HfOb09zTi7Rwrw22BP4HbgVH1XoR/dd4BDLq3Pa1eymfqdVcUdU6l8TgN6NeaA7KhJkx1Cj8BptA8lIENWnuHvKIqlJw7fQRMoPmYAHzs3KyqM7PSuZMlu1ZhsvMKCwCFQ2x0sJtxJkLOzKBssugWnOyiPGHR6XDBcnf4g1zsLpcnGhFi/QO7HugVQ9gDrAKOT5EfDXwu22xTmSg52lHPZOdxokjjLyn8awAYnzJ3vmR+yONmS12EqCdGyojeGLm0iHQDMAM4SYHF7i9M0TPCRdKrsxZcJyHjTvXAJBHBAWf8PuA54MwE+WckY9k9DbdIZk2aQLto9f4qCaDH6cCzinrRBr4F7lY4TcNLkjXPyEqUVt8cSLNzoZS8W6XxRtWvAt6O+fwG3bfDmoc+zTkrR2695C5PGnxSg1ZPFMF04KFYbbIXeBqYVVDXXs3PemuGByXXnTS4WoNWgobgPOBl4C+3ga3y4TQ6cxzwJnBJwtgx0mElcR4i7zFdw/C1Bq2KS8N4GbrVGW8beQU4P2fx64DfgMdTxs9x5DQPsyVrfYFh+Dnntd7oZOzaLZcy18qCsdbXNeeRnI1WgBcCNjJFsj8lDQ5pcGzC2G2x0nZxilwci93m886ebdLkHg7Q2+b6BIU28qPLL5aUQuqYVW7z9wTMeVGy9mZq2kiWa0XRZG7AIovcxg8pIYYgakCcXatrZR32HmeYuda9otbxqPO8ewuHCrDnUS55lms97L0Z4deS3WPA77Fk9x3wBvBBrEdl162EY5bm7AqUj8KvrZ2aEK15lkW9LxP92B0z3CjDF/r9IcVwpea9EyifmRAXaNA6gKGM9hTRhAvkWnMczS7S140MWxEon0lRyo40GmutBiN1hqKO4bmB817VnM4A2XZHGo9OE1orhdbGrBYzHPmz2uMpuWQWoubCnAD9nZJ9K0voGglZKKwFY5T1Ix7WLwqShHHyBHvCeRu2HLZZOpfklbo7JXgxteMMx8sOKqDEjZ2rcavHQ7s734d8huiS8OY6NR+MKTyqJx71yS5046/pvslkweqZLZJdFrJwyfV6s0rOorDSdpsL19sUIe33HwEt0S7npsEfhaJuxWBCBq8FbTJoT6yGTwyjDh2Sq6q70+OeQF7FVo27dSi5Tg8goAMF88wwF9vk2jataGIfBWyUDRtr+c44VcQsqtzs72ahXVQnSq41f/CZ6V5tv1o9jUaHW9NY+Qn1UjzNudmgeq8h7Z2iGK1gsM+5k3G4uqLkAkCUwOr19XWEkt0Wp39Fo7+9z4u1QPvUWSlXeQ46He2oyJUa1UBPfDvLRdcjA4ZErx9Q4TNbYXusrsn6aLRIMutdnyCiHcta9R8QbeqKrxGXqhS8DqgxuKRVG0jCRGXobnUAt6uhEf1Tjf3+UuVpt2RT64kj4D+OfwCLtMHzJe+iQgAAAABJRU5ErkJggg=="/>
                        </defs>
                    </svg>

            </div>
        </div>
    );
};

export default Footer;