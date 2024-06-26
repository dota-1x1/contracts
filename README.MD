## Кратко

- Контракты описывают объекты для запросов/ответов к API (а не структуры в БД или другие);
- Избегать описания ответов из API;
- Имя файлов контрактов соответствует имени модуля/сервиса в NestJS;
- Для переиспользуемых сущностей есть отдельный каталог - entities;

## Какие объекты описывать в контрактах

Я выбрал подход в котором контракты преобразуются в DTO для запросов к API. Это не значит что они не могут использоваться например для валидации формы на клиенте.

А для возращаемых из API результатов используется типизация сгенерированая Prisma.

Можно определять Zod контракты только для тех ответов, где необходима большая гибкость.

## Нейминг и структура файлов

**Entities** 📂 - папка для хранения сущностей/объектов, которые могут быть импортированы в контракты.

Если есть какаято сущность/объект который будет использоваться в нескольких контрактах, то с большой вероятностью его можно вынести в Entities.

При этом желательно избегать переоптимизации - не нужно пытаться вынести все дублирующиеся правила из контрактов. Пускай entities остается привязан к реально существующим сущностям в БД и т.д.

Все entity экспортируются в объщий объект `ZOD_Entity`. Через него, сущности будут импортироваться в проектах.

```ts
import { ZOD_Entity } from 'contracts/entities';

export const MatchTrackerEndRequestSchema = z.object({
  match: ZOD_Entity.MatchCreateSchema,
  players: ZOD_Entity.PlayerCreateSchema,
});
```

**Commands** 📂 - папка для хранения контрактов.

Имя файлов контрактов соответствует имени модуля/сервиса в NestJS. Не стоит создавать файлов которые не "линкуются" с модулями.

Запрещена перелинковка между файлами контрактов. Если у контрактов есть общие сущности, то возможно их можно вынести в entities или в другой каталог.

Все контракты экспортируются во внешний мир из файла index.ts. Пример нейминга ниже.

```
ZOD_MatchTracker.StartSchema
ZOD_MatchTracker.StartType
ZOD_PlayerMatches.AddSchema
ZOD_Player.Response_ProfileSchema
```

- Схема и тип обязательно должны иметь соответствующее указание в имени;
- Контракты для ответов на запросы к API дожны начинаться с приставки `Response_`.
