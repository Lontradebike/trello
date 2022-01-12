package reacttrello

import grails.gorm.services.Service

@Service(Lists)
interface ListsService {

    Lists get(Serializable id)

    List<Lists> list(Map args)

    Long count()

    Lists delete(Serializable id)

    Lists save(Lists lists)

}
