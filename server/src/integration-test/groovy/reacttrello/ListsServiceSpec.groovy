package reacttrello

import grails.testing.mixin.integration.Integration
import grails.gorm.transactions.Rollback
import org.grails.datastore.mapping.core.Datastore
import org.springframework.beans.factory.annotation.Autowired
import spock.lang.Specification

@Integration
@Rollback
class ListsServiceSpec extends Specification {

    ListsService listsService
    @Autowired Datastore datastore

    private Long setupData() {
        // TODO: Populate valid domain instances and return a valid ID
        //new Lists(...).save(flush: true, failOnError: true)
        //new Lists(...).save(flush: true, failOnError: true)
        //Lists lists = new Lists(...).save(flush: true, failOnError: true)
        //new Lists(...).save(flush: true, failOnError: true)
        //new Lists(...).save(flush: true, failOnError: true)
        assert false, "TODO: Provide a setupData() implementation for this generated test suite"
        //lists.id
    }

    void cleanup() {
        assert false, "TODO: Provide a cleanup implementation if using MongoDB"
    }

    void "test get"() {
        setupData()

        expect:
        listsService.get(1) != null
    }

    void "test list"() {
        setupData()

        when:
        List<Lists> listsList = listsService.list(max: 2, offset: 2)

        then:
        listsList.size() == 2
        assert false, "TODO: Verify the correct instances are returned"
    }

    void "test count"() {
        setupData()

        expect:
        listsService.count() == 5
    }

    void "test delete"() {
        Long listsId = setupData()

        expect:
        listsService.count() == 5

        when:
        listsService.delete(listsId)
        datastore.currentSession.flush()

        then:
        listsService.count() == 4
    }

    void "test save"() {
        when:
        assert false, "TODO: Provide a valid instance to save"
        Lists lists = new Lists()
        listsService.save(lists)

        then:
        lists.id != null
    }
}
